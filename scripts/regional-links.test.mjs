import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import test from 'node:test';
import { chromium } from 'playwright';
import { preview } from 'vite';

// Run after npm run build. Exercise the built app, without contacting third parties.
test('service catalogue exposes usable B2B and institutional links on desktop and mobile', async (t) => {
  const server = await preview({ preview: { host: '127.0.0.1', port: 0, open: false } });
  let browser;
  try {
    const base = `http://127.0.0.1:${server.httpServer.address().port}`;
    const executablePath = process.env.CHROME_PATH || (existsSync('/usr/bin/google-chrome') ? '/usr/bin/google-chrome' : undefined);
    browser = await chromium.launch({ headless: true, executablePath });
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 375, height: 812 }]) {
      await t.test(`${viewport.width}x${viewport.height}`, async () => {
        const context = await browser.newContext({ locale: 'es-ES', viewport });
        try {
          await context.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
          await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
          const page = await context.newPage();
          const errors = [];
          page.on('pageerror', error => errors.push(error.message));
          for (const [path, name] of [
            ['/limpieza-para-empresas', 'Ver servicios para empresas'],
            ['/quienes-somos', 'Conoce nuestra empresa'],
            ['/contacto', 'Contáctanos'],
          ]) {
            const response = await page.goto(`${base}/servicios`, { waitUntil: 'networkidle' });
            assert.equal(response.status(), 200);
            const link = page.getByRole('link', { name, exact: true });
            assert.equal(await link.count(), 1);
            assert.equal(await link.getAttribute('href'), path);
            assert.equal(await link.evaluate(el => !!el.closest('header, footer')), false);
            if (path === '/limpieza-para-empresas') {
              const catalogue = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Limpieza para Empresas', exact: true }) });
              assert.equal(await catalogue.getByRole('heading', { name: 'Limpieza de Sofás', exact: true }).count(), 1, 'B2B belongs to the existing catalogue');
              assert.equal(await catalogue.getByRole('link', { name, exact: true }).count(), 1);
            }
            await link.scrollIntoViewIfNeeded();
            await page.waitForTimeout(1200); // Allow the existing entrance animations to finish.
            assert.ok(await link.isVisible());
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'No horizontal overflow');
            const destination = await context.request.get(`${base}${path}`, { maxRedirects: 0 });
            assert.equal(destination.status(), 200, path);
            await page.evaluate(() => { window.__regionalLinksDocument = true; });
            await link.focus();
            assert.ok(await link.evaluate(el => el === document.activeElement));
            await page.keyboard.press('Enter');
            await page.waitForURL(`${base}${path}`);
            await page.waitForFunction(expected => document.querySelector('link[rel="canonical"]')?.href === expected, `https://superclim.es${path}`);
            assert.ok(await page.evaluate(() => window.__regionalLinksDocument), 'Navigation stays in the SPA');
            assert.equal(await page.locator('h1').count(), 1);
            assert.equal(await page.locator('link[rel="canonical"]').count(), 1);
          }
          assert.deepEqual(errors, []);
        } finally {
          await context.close();
        }
      });
    }
  } finally {
    await browser?.close();
    await new Promise(resolve => server.httpServer.close(resolve));
  }
});

test('regional network: published destinations, intent, keyboard and SPA at three viewport sizes', async () => {
  const { readFile, mkdir } = await import('node:fs/promises');
  const ts = (await import('typescript')).default;
  const vm = await import('node:vm');
  const configContext = { exports: {} };
  vm.runInNewContext(ts.transpileModule(await readFile('src/config/regionalNavigation.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, configContext);
  const config = configContext.exports;
  const routes = [...(await readFile('dist/sitemap.xml', 'utf8')).matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  assert.equal(routes.length, 56);
  const inventory = Object.entries(config.regionalNavigation).flatMap(([service, entry]) => Object.entries(entry.localUrls).map(([city, href]) => ({ service, city, href })));
  assert.equal(inventory.length, 28);
  assert.equal(new Set(inventory.map(item => item.href)).size, 28);
  assert.equal(config.cityServiceLinks('rubi').length, 0);
  assert.equal(config.cityServiceLinks('Castellar del Vallès').some(link => link.service === 'sofas'), false);
  assert.equal(config.cityServiceLinks('Barberà del Vallès').some(link => link.service === 'colchones'), false);
  for (const item of inventory) assert.ok(routes.includes(item.href), item.href);
  const server = await preview({ preview: { host: '127.0.0.1', port: 0, open: false } });
  const base = `http://127.0.0.1:${server.httpServer.address().port}`;
  let browser;
  try {
    browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome' });
    await mkdir('/tmp/superclim-042/visual', { recursive: true });
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 375, height: 812 }, { width: 390, height: 844 }]) {
      const context = await browser.newContext({ viewport, locale: 'es-ES' });
      await context.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
      await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      for (const item of inventory) {
        assert.equal((await page.goto(base + item.href)).status(), 200);
        const related = page.locator('[data-regional-related]');
        await related.waitFor();
        const expected = JSON.parse(JSON.stringify(config.cityServiceLinks(item.city, item.service).map(link => link.href)));
        assert.deepEqual(await related.locator('a').evaluateAll(links => links.map(a => a.getAttribute('href'))), expected, item.href);
        const siblings = config.siblingCityLinks(item.service, item.city);
        assert.ok(siblings.length >= 3 && siblings.length <= 6);
        for (const sibling of siblings) assert.equal(await page.getByRole('link', { name: sibling.name, exact: true }).count(), 1, sibling.name);
        await related.scrollIntoViewIfNeeded();
        await page.waitForTimeout(100);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        const first = related.locator('a').first();
        await first.focus();
        assert.ok(await first.evaluate(el => el === document.activeElement && getComputedStyle(el).outlineStyle !== 'none'));
        await page.evaluate(() => { window.__regionalNetworkDocument = true; });
        await page.keyboard.press('Enter');
        await page.waitForURL(base + expected[0]);
        await page.waitForFunction(canonical => document.querySelector('link[rel="canonical"]')?.href === canonical, 'https://superclim.es' + expected[0]);
        assert.ok(await page.evaluate(() => window.__regionalNetworkDocument));
        assert.equal(await page.locator('h1').count(), 1);
        assert.equal(await page.locator('title').count(), 1);
      }
      await page.goto(base + '/');
      assert.equal(await page.locator('[data-regional-home]').count(), 6);
      for (const href of await page.locator('[data-regional-home] a').evaluateAll(links => links.map(a => a.getAttribute('href')))) {
        assert.ok(routes.includes(href));
        assert.notEqual(href, '/limpieza-de-alfombras/lavado-de-alfombras-barcelona');
      }
      assert.equal(await page.locator('a[href*="maps/dir/"]').count(), 6);
      await page.locator('section').filter({ has: page.locator('[data-regional-home]') }).locator('h2').scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await page.locator('[data-regional-home]').first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await page.screenshot({ path: `/tmp/superclim-042/visual/home-${viewport.width}.png` });
      await page.goto(base + '/limpieza-de-sofas/limpieza-de-sofas-a-domicilio');
      for (const city of ['Sabadell', 'Barcelona', 'Terrassa', 'Cerdanyola del Vallès', 'Sant Cugat', 'Sant Quirze del Vallès']) {
        const link = page.getByRole('link', { name: `Limpieza de sofás en ${city}`, exact: true });
        assert.equal(await link.count(), 1);
        assert.equal(await link.getAttribute('href'), config.cityServiceLinks(city).find(link => link.service === 'sofas').href);
      }
      for (const city of ['Castellar del Vallès', 'Rubí']) assert.equal(await page.getByRole('link', { name: `Limpieza de sofás en ${city}`, exact: true }).count(), 0);
      await page.goto(base + '/servicios/limpieza-de-sofas-sant-cugat');
      await page.locator('[data-regional-related]').scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await page.screenshot({ path: `/tmp/superclim-042/visual/related-${viewport.width}.png` });
      const siblingsSection = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Limpieza de Sofás en otras ciudades', exact: true }) });
      await siblingsSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.screenshot({ path: `/tmp/superclim-042/visual/siblings-${viewport.width}.png` });
      if (viewport.width < 640) {
        const start = await page.locator('[data-regional-related]').evaluate(el => el.getBoundingClientRect().top + scrollY);
        const end = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let y = start; y < end; y += 200) {
          await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), y);
          await page.waitForTimeout(100);
          const control = page.locator('.floating-whatsapp a');
          if (await control.isVisible()) assert.equal(await control.evaluate(el => {
            const a = el.getBoundingClientRect();
            return [...document.querySelectorAll('main a, main h2, footer a')].some(other => {
              const b = other.getBoundingClientRect();
              return b.width > 0 && b.height > 0 && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
            });
          }), false, 'WhatsApp must not overlap regional links');
        }
      }
      assert.deepEqual(errors, []);
      await context.close();
    }
  } finally {
    await browser?.close();
    await new Promise(resolve => server.httpServer.close(resolve));
  }
});
