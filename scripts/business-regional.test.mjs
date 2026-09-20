import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import test from 'node:test';
import { chromium } from 'playwright';
import { preview } from 'vite';

// Deliberately focused on this release: six new routes, two parents and Home.
// Set B2B_REGIONAL_BASE=https://superclim.es for the same checks after deployment.
const cases = [
  ['oficinas', 'sabadell', 'Sabadell'], ['oficinas', 'sant-cugat', 'Sant Cugat'], ['oficinas', 'terrassa', 'Terrassa'],
  ['naves-industriales', 'sabadell', 'Sabadell'], ['naves-industriales', 'terrassa', 'Terrassa'], ['naves-industriales', 'rubi', 'Rubí'],
].map(([service, city, name]) => ({ service, city, name, path: `/limpieza-para-empresas/${service}/${city}`, h1: `Limpieza de ${service === 'oficinas' ? 'oficinas' : 'naves industriales'} en ${name}` }));
const moduleCache = new Map();
function loadConfig(file) {
  if (moduleCache.has(file)) return moduleCache.get(file);
  const exports = {};
  const require = name => loadConfig(`src/${name.replace(/^@\//, '')}.ts`);
  vm.runInNewContext(ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports, require });
  moduleCache.set(file, exports);
  return exports;
}
const config = loadConfig('src/config/businessRegionalPages.ts');
const navigation = loadConfig('src/config/regionalNavigation.ts');
const { businessConfig } = loadConfig('src/config/business.ts');
const { seoConfig } = loadConfig('src/config/seo.ts');
function snapshot() {
  const all = selector => [...document.querySelectorAll(selector)];
  return {
    title: all('title').map(el => el.textContent), description: all('meta[name="description"]').map(el => el.content),
    canonical: all('link[rel="canonical"]').map(el => el.href), robots: all('meta[name="robots"]').map(el => el.content),
    h1: all('h1').map(el => el.textContent), schemas: all('script[type="application/ld+json"]').map(el => JSON.parse(el.textContent)),
  };
}

test('six regional B2B pages: SEO, prerender, scoped navigation, forms and Home preservation', async () => {
  const server = process.env.B2B_REGIONAL_BASE ? undefined : await preview({ preview: { host: '127.0.0.1', port: 0 } });
  const base = process.env.B2B_REGIONAL_BASE || `http://127.0.0.1:${server.httpServer.address().port}`;
  const artifacts = process.env.B2B_REGIONAL_ARTIFACTS || '/tmp/superclim-b2b-local/local';
  await fs.mkdir(artifacts, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || (existsSync('/usr/bin/google-chrome') ? '/usr/bin/google-chrome' : undefined) });
  const report = [];
  try {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const sitemapResponse = await context.request.get(base + '/sitemap.xml');
    assert.equal(sitemapResponse.status(), 200);
    const sitemap = await sitemapResponse.text();
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    assert.equal(urls.length, 56); assert.equal(new Set(urls).size, 56);
    const raw = await context.newPage();
    await raw.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
    const snapshots = new Map();
    for (const item of cases) {
      assert.ok(urls.includes('https://superclim.es' + item.path));
      assert.ok(existsSync(`dist${item.path}.html`), 'Explicit prerendered file');
      const response = await raw.goto(base + item.path);
      assert.equal(response.status(), 200);
      const source = config.businessRegionalPages.find(page => config.businessRegionalPath(page) === item.path);
      const expected = config.businessRegionalSEO(source);
      const current = await raw.evaluate(snapshot);
      assert.deepEqual(current.title, [expected.title]); assert.deepEqual(current.description, [expected.description]);
      assert.deepEqual(current.h1, [item.h1]); assert.deepEqual(current.canonical, ['https://superclim.es' + item.path]);
      assert.equal(current.robots.length, 1); assert.match(current.robots[0], /^index, follow/);
      assert.equal(current.schemas.length, 2);
      const service = current.schemas.find(schema => schema['@type'] === 'Service');
      assert.equal(service.url, expected.canonical); assert.equal(service.provider.name, businessConfig.fullName);
      assert.equal(service.provider['@id'], 'https://superclim.es/limpieza-para-empresas#organization');
      assert.equal(service.areaServed.name, item.name);
      assert.deepEqual(current.schemas.find(schema => schema['@type'] === 'BreadcrumbList').itemListElement.map(i => i.name), ['Inicio', 'Limpieza para Empresas', item.service === 'oficinas' ? 'Oficinas' : 'Naves Industriales', item.name]);
      const text = await raw.locator('main').innerText();
      for (const paragraph of [source.intro, source.scope, source.planning, source.coverage, source.process]) assert.ok(text.includes(paragraph), 'Unique content in initial HTML');
      assert.doesNotMatch(text, /alquiler de trabajadores|cesión de personal|\bETT\b|visita gratuita|visita inmediata|materiales ilimitados/i);
      assert.ok(text.includes('los materiales previstos en la propuesta'));
      assert.ok(text.includes('Si hace falta conocer la instalación, acordamos una visita de valoración.'));
      if (item.service !== 'oficinas') for (const limit of ['residuos peligrosos', 'trabajos en altura no contratados', 'maquinaria especializada fuera del alcance', 'limpieza técnica especializada fuera del alcance acordado']) assert.ok(text.includes(limit));
      assert.equal(await raw.locator('form, input, textarea, select').count(), 0, 'No no-JS GET submission');
      const fallback = raw.getByRole('link', { name: 'Solicitar presupuesto por WhatsApp', exact: true });
      assert.equal(new URL(await fallback.getAttribute('href')).pathname, '/' + businessConfig.whatsappNumber);
      assert.equal(await raw.locator('[data-business-siblings] li a').count(), 2);
      const expectedRelated = JSON.parse(JSON.stringify(navigation.cityServiceLinks(item.city, item.service === 'oficinas' ? 'oficinas' : 'naves', true).map(link => link.href)));
      assert.deepEqual(await raw.locator('[data-regional-related] a').evaluateAll(links => links.map(link => link.getAttribute('href'))), expectedRelated);
      snapshots.set(item.path, current);
      report.push({ path: item.path, status: 200, prerender: true, noJS: true });
    }
    assert.equal(new Set([...snapshots.values()].map(s => s.title[0])).size, 6);
    assert.equal(new Set([...snapshots.values()].map(s => s.description[0])).size, 6);
    await context.close();
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 375, height: 812 }, { width: 390, height: 844 }]) {
      const client = await browser.newContext({ viewport, locale: 'es-ES' });
      await client.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
      await client.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
      const page = await client.newPage(); const errors = []; page.on('pageerror', error => errors.push(error.message));
      for (const item of cases) {
        assert.equal((await page.goto(base + item.path)).status(), 200);
        await page.locator('form').waitFor();
        assert.deepEqual(await page.evaluate(snapshot), snapshots.get(item.path));
        for (const property of ['og:title', 'og:description', 'og:url']) assert.equal(await page.locator(`meta[property="${property}"]`).count(), 1);
        assert.equal(await page.locator('#b2b-tipo').inputValue(), item.service === 'oficinas' ? 'Oficina' : 'Nave industrial');
        await page.locator('#b2b-nombre').fill('María & José'); await page.locator('#b2b-municipio').fill(item.name);
        await page.locator('#b2b-mensaje').fill('Accesos + horarios / valoración');
        await page.locator('form button[type="submit"]').click();
        const prepared = page.getByRole('link', { name: 'Abrir WhatsApp y revisar solicitud', exact: true });
        const target = new URL(await prepared.getAttribute('href'));
        assert.equal(target.hostname, 'wa.me'); assert.equal(target.pathname, '/' + businessConfig.whatsappNumber);
        assert.ok(target.searchParams.get('text').includes('María & José')); assert.ok(target.searchParams.get('text').includes(item.name));
        assert.ok(target.searchParams.get('text').includes('Accesos + horarios / valoración')); assert.equal(new URL(page.url()).search, '');
        const sibling = page.locator('[data-business-siblings] li a').first(); const href = await sibling.getAttribute('href');
        await page.keyboard.press('Tab');
        await sibling.focus(); assert.ok(await sibling.evaluate(el => el === document.activeElement && getComputedStyle(el).outlineStyle !== 'none'));
        await page.evaluate(() => { window.__businessRegionalDocument = true; }); await page.keyboard.press('Enter'); await page.waitForURL(base + href);
        await page.waitForFunction(canonical => document.querySelector('link[rel="canonical"]')?.href === canonical, 'https://superclim.es' + href);
        assert.ok(await page.evaluate(() => window.__businessRegionalDocument));
        assert.equal(await page.locator('#b2b-nombre').inputValue(), '', 'New route resets the quote form');
        assert.deepEqual(await page.evaluate(snapshot), snapshots.get(href), 'SPA clears previous schema and metadata');
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      }
      for (const [service, key] of [['oficinas', 'officeCleaning'], ['naves-industriales', 'industrialCleaning']]) {
        const path = '/limpieza-para-empresas/' + service;
        assert.equal((await page.goto(base + path)).status(), 200);
        const parentSEO = seoConfig[key];
        const current = await page.evaluate(snapshot);
        assert.deepEqual(current.title, [parentSEO.title]); assert.deepEqual(current.description, [parentSEO.description]);
        assert.deepEqual(current.h1, [parentSEO.h1]); assert.deepEqual(current.canonical, [parentSEO.canonical]);
        const coverage = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Desde Sabadell, para el Vallès Occidental y Barcelona', exact: true }) });
        assert.deepEqual((await coverage.locator('li a').evaluateAll(links => links.map(link => link.getAttribute('href')))).sort(), cases.filter(item => item.service === service).map(item => item.path).sort());
        assert.equal(await coverage.locator('li:not(:has(a))').count(), 6);
        const chip = coverage.locator('li a').first(); const href = await chip.getAttribute('href');
        await chip.click(); await page.waitForURL(base + href); await page.waitForFunction(canonical => document.querySelector('link[rel="canonical"]')?.href === canonical, 'https://superclim.es' + href);
        assert.deepEqual(await page.evaluate(snapshot), snapshots.get(href));
      }
      await page.goto(base + '/'); await page.locator('h1').waitFor();
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('[data-regional-home]').count(), 5);
      assert.equal(await page.locator('[data-regional-home] a[href^="/limpieza-para-empresas"]').count(), 0, 'Home B2B cards belong to next release');
      await page.goto(base + cases[0].path); await page.waitForTimeout(700); await page.screenshot({ path: `${artifacts}/offices-${viewport.width}.png` });
      await page.goto(base + cases[5].path); await page.waitForTimeout(700); await page.screenshot({ path: `${artifacts}/industrial-${viewport.width}.png` });
      assert.deepEqual(errors, []); await client.close();
    }
    await fs.writeFile(`${artifacts}/results.json`, JSON.stringify({ sitemap: urls.length, pages: report, parents: 2, home: 'PASS', viewports: [1440, 375, 390], forms: '18/18 JS + 6 no-JS', spa: 'PASS' }, null, 2));
  } finally {
    await browser.close(); if (server) await new Promise(resolve => server.httpServer.close(resolve));
  }
});
