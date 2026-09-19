import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';
import ts from 'typescript';
import test from 'node:test';
import { chromium } from 'playwright';
import { preview } from 'vite';

const routes = ['/limpieza-para-empresas', '/limpieza-para-empresas/oficinas', '/limpieza-para-empresas/naves-industriales', '/limpieza-para-empresas/centros-logisticos'];
const approvedRegionalContent = [
  [
    "Contratos recurrentes desde nuestra base en Sabadell",
    "Desde nuestra base en Sabadell, valoramos la ubicación de tu instalación, los accesos y la frecuencia y los horarios más adecuados para el servicio. Según se trate de oficinas, naves o centros logísticos, concretamos las tareas y las condiciones del contrato recurrente. Tu empresa contrata el servicio; Superclim organiza la ejecución y su supervisión conforme al alcance acordado. Consulta la especialidad correspondiente para conocer qué podemos incluir en la propuesta."
  ],
  [
    "Un servicio recurrente adaptado a la jornada",
    "La frecuencia puede ser diaria, varias veces por semana o semanal, según la ocupación y el uso de los espacios. Para las oficinas en Barcelona, concretamos con la persona responsable de la instalación qué áreas privativas y qué zonas comunes forman parte del servicio contratado. Acordamos los accesos, el cierre y los horarios de intervención según la disponibilidad de cada zona. El plan distingue las tareas habituales de otras actuaciones periódicas y permite revisar las prioridades con esa persona responsable."
  ],
  [
    "Planificación del servicio en Terrassa y Rubí",
    "Para el mantenimiento recurrente de naves en Terrassa, definimos frecuencias según el uso de las áreas productivas accesibles, pasillos y espacios de apoyo, coordinando las intervenciones con la actividad de la instalación. En Rubí, valoramos el uso de la nave, los tipos de superficies, los accesos, la circulación y las prioridades para diferenciar las tareas habituales de las necesidades adicionales. En ambos municipios, la propuesta concreta las zonas disponibles, los horarios y el alcance del servicio. Si hace falta conocer la instalación, acordamos una visita de valoración. No incluye limpieza de maquinaria especializada, retirada de residuos peligrosos, trabajos en altura ni limpieza técnica fuera del alcance acordado."
  ],
  [
    "Servicio recurrente compatible con los turnos",
    "En los centros logísticos de Barcelona, acordamos con el responsable del centro ventanas de ejecución según los turnos y la circulación de personas y mercancías. La propuesta concreta cuándo estarán disponibles las zonas de picking, los pasillos, los muelles autorizados para la intervención y las oficinas internas, con frecuencias según su uso. El servicio se realiza sobre las áreas acordadas, sin mover mercancías. El mantenimiento habitual y las necesidades adicionales se distinguen en la propuesta. Superclim organiza el equipo y realiza el seguimiento del servicio; las incidencias y los cambios de prioridad se revisan con el responsable del centro dentro del alcance contratado."
  ]
];
function loadConfig(source) {
  const context = { exports: {} };
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
  return JSON.parse(JSON.stringify(context.exports.seoConfig));
}
test('existing SEO configurations and community source files are preserved', async () => {
  const before = loadConfig(execFileSync('git', ['show', 'HEAD:src/config/seo.ts'], { encoding: 'utf8' }));
  const after = loadConfig(await fs.readFile('src/config/seo.ts', 'utf8'));
  for (const key of Object.keys(before)) assert.deepEqual(after[key], before[key], key);
  const changed = execFileSync('git', ['diff', '--name-only'], { encoding: 'utf8' });
  assert.doesNotMatch(changed, /src\/(pages\/services\/(LimpiezaComunidades|communities\/)|config\/communityPages)/);
});
test('B2B prerender, routes, SEO, mobile layout and quote flow', async (t) => {
  const server = await preview({ preview: { host: '127.0.0.1', port: 4174, strictPort: true, open: false } });
  let browser;
  try {
    browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : existsSync('/usr/bin/google-chrome') ? { executablePath: '/usr/bin/google-chrome' } : {}) });
    const base = 'http://127.0.0.1:4174';
    const sitemap = await fs.readFile('dist/sitemap.xml', 'utf8');
    const robots = await fs.readFile('dist/robots.txt', 'utf8');
    assert.match(robots, /Allow: \/\s/);
    assert.match(robots, /Sitemap: https:\/\/superclim.es\/sitemap.xml/);
    const output = 'audit/b2b';
    await fs.mkdir(output, { recursive: true });
    const report = [];
    const titles = new Set();
    const descriptions = new Set();
    for (const route of routes) {
      assert.ok(sitemap.includes(`https://superclim.es${route}</loc>`));
      for (const viewport of [{ width: 1440, height: 1000 }, { width: 375, height: 812 }]) for (const javaScriptEnabled of [false, true]) {
        t.diagnostic(`${route} ${viewport.width}x${viewport.height} JS=${javaScriptEnabled}`);
        const context = await browser.newContext({ javaScriptEnabled, locale: 'es-ES', viewport });
        await context.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
        // Block external tracking/media: validation must not send production analytics or messages.
        await context.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.abort());
        const page = await context.newPage();
        const errors = [];
        const documentRequests = [];
        page.on('request', request => {
          if (request.isNavigationRequest() && request.frame() === page.mainFrame()) documentRequests.push(request.url());
        });
        page.on('pageerror', error => errors.push(error.message));
        const response = await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200);
        assert.equal(await page.locator('h1').count(), 1);
        const content = await page.locator('main').innerText();
        const regionalHeading = page.getByRole('heading', { name: 'Servicio recurrente de oficinas en Sant Cugat', exact: true });
        assert.equal(await regionalHeading.count(), route === routes[1] ? 1 : 0, 'Regional block belongs only to offices');
        if (route === routes[1]) {
          const cards = page.locator('main section').filter({ has: page.getByRole('heading', { name: 'De la recepción al último puesto de trabajo', exact: true }) }).locator('article');
          assert.deepEqual(await cards.locator('h3').allTextContents(), ['Puestos de trabajo y reuniones', 'Recepción y espacios compartidos', 'Office, cocina y aseos', 'Servicio recurrente de oficinas en Sant Cugat']);
          assert.equal(await cards.nth(3).locator('p').innerText(), 'Atendemos oficinas y despachos en Sant Cugat con un servicio de limpieza recurrente adaptado a cada instalación. Revisamos con la persona responsable los accesos, la ocupación y las prioridades: salas de reunión, aseos y áreas comunes pueden necesitar frecuencias distintas. Acordamos los horarios y el alcance del contrato; Superclim organiza el equipo, los turnos y la supervisión. Si hace falta conocer la instalación, acordamos una visita de valoración.');
          await regionalHeading.scrollIntoViewIfNeeded();
          assert.ok(await regionalHeading.isVisible());
          assert.ok(await regionalHeading.evaluate(el => !!(el.compareDocumentPosition([...document.querySelectorAll('h2')].find(h => h.textContent === 'Otros servicios para tus instalaciones')) & Node.DOCUMENT_POSITION_FOLLOWING)));
        }
        const [approvedTitle, approvedText] = approvedRegionalContent[routes.indexOf(route)];
        const approvedHeading = page.getByRole('heading', { name: approvedTitle, exact: true });
        assert.equal(await approvedHeading.count(), 1);
        const approvedParagraph = approvedHeading.locator('xpath=following-sibling::p[1]');
        assert.equal((await approvedParagraph.innerText()).replace(/\s+/g, ' ').trim(), approvedText);
        await approvedHeading.scrollIntoViewIfNeeded();
        assert.ok(await approvedHeading.isVisible());
        for (const [otherTitle] of approvedRegionalContent.filter(([title]) => title !== approvedTitle)) {
          assert.equal(await page.getByRole('heading', { name: otherTitle, exact: true }).count(), 0);
        }
        if (route === routes[0] || route === routes[2]) {
          const cards = approvedHeading.locator('xpath=../..').locator('article');
          assert.equal(await cards.count(), 4);
          assert.equal(await cards.nth(3).locator('h3').innerText(), approvedTitle);
        }
        assert.ok(content.length > 3000);
        assert.doesNotMatch(content, /alquiler de trabajadores|cesión de personal|personal puesto a disposición|\bETT\b|visita gratuita|visita inmediata|reservamos visita|visita garantizada/i);
        assert.ok(content.includes('los materiales previstos en la propuesta'));
        assert.ok(content.includes('Si hace falta conocer la instalación, acordamos una visita de valoración.'));
        for (const name of ['Qué queda definido en la propuesta', 'Organización y control del servicio', 'Valoramos el alcance', 'Organizamos el servicio']) {
          assert.equal(await page.getByRole('heading', { name, exact: true }).count(), 1);
        }
        const contact = page.getByRole('link', { name: 'Contacta con Superclim', exact: true });
        assert.equal(await contact.count(), 1);
        assert.equal(await contact.getAttribute('href'), '/contacto');
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route} ${viewport.width} overflow`);
        if (!javaScriptEnabled) {
          assert.equal(await page.locator('form, input, select, textarea, button[type="submit"]').count(), 0, 'No native form can expose data through GET without JS');
          const fallback = page.getByRole('link', { name: 'Solicitar presupuesto por WhatsApp', exact: true });
          assert.equal(new URL(await fallback.getAttribute('href')).host, 'wa.me');
          await fallback.focus();
          assert.ok(await fallback.evaluate(el => el === document.activeElement));
        }
        for (const selector of ['title', 'meta[name="description"]', 'meta[name="robots"]', 'link[rel="canonical"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:url"]', 'meta[name="twitter:title"]', 'meta[name="twitter:description"]']) assert.equal(await page.locator(selector).count(), 1, `${route} ${javaScriptEnabled} ${selector}`);
        assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), `https://superclim.es${route}`);
        assert.match(await page.locator('meta[name="robots"]').getAttribute('content'), /^index, follow/);
        const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
        const parsed = schemas.map(JSON.parse);
        assert.equal(parsed.filter(s => s['@type'] === 'Service').length, 1);
        assert.equal(parsed.filter(s => s['@type'] === 'BreadcrumbList').length, 1);
        assert.equal(parsed.filter(s => s['@type'] === 'Organization').length, route === routes[0] ? 1 : 0);
        assert.doesNotMatch(schemas.join(''), /AggregateRating|"Review"|"price"|FAQPage/);
        if (route === routes[0]) assert.equal(parsed.find(s => s['@type'] === 'Service').hasOfferCatalog.itemListElement.length, 5);
        const links = await page.locator('main a[href^="/"]').evaluateAll(els => els.map(el => el.getAttribute('href')));
        for (const target of [...routes, '/limpieza-de-comunidades', '/contacto'].filter(target => target !== route)) {
          assert.ok(links.includes(target), `${route} missing ${target}`);
          assert.equal((await page.request.get(`${base}${target}`, { maxRedirects: 0 })).status(), 200, target);
        }
        assert.equal(errors.length, 0, errors.join('\n'));
        if (javaScriptEnabled) {
          titles.add(await page.title());
          descriptions.add(await page.locator('meta[name="description"]').getAttribute('content'));
          await page.locator('footer').scrollIntoViewIfNeeded();
          await page.waitForTimeout(700);
          await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          await page.screenshot({ path: `${output}/${route.split('/').at(-1)}-${viewport.width}.png`, fullPage: true });
          await page.getByRole('link', { name: 'Solicitar presupuesto', exact: true }).click();
          await page.getByRole('button', { name: 'Preparar solicitud para WhatsApp' }).click();
          assert.equal(await page.getByRole('status').count(), 0);
          await page.getByLabel('Nombre', { exact: false }).fill('Prueba B2B');
          await page.getByLabel('Municipio').fill('Sabadell');
          await page.getByLabel('Empresa', { exact: true }).fill('Empresa de prueba');
          await page.getByLabel('Email', { exact: true }).fill('invalido');
          await page.getByRole('button', { name: 'Preparar solicitud para WhatsApp' }).click();
          assert.equal(await page.getByRole('status').count(), 0);
          await page.getByLabel('Email', { exact: true }).fill('prueba@example.com');
          await page.getByLabel('Mensaje', { exact: true }).fill('Acceso & turnos + horarios');
          assert.equal(await page.locator('form input, form select, form textarea').count(), 10);
          assert.equal(await page.locator('form :required').count(), 2);
          await page.getByRole('button', { name: 'Preparar solicitud para WhatsApp' }).click();
          const link = page.getByRole('link', { name: 'Abrir WhatsApp y revisar solicitud' });
          assert.equal(new URL(page.url()).search, '', 'No personal data in the page query string');
          assert.deepEqual(documentRequests, [`${base}${route}`], 'Preparing WhatsApp must not submit a document GET');
          const target = new URL(await link.getAttribute('href'));
          assert.equal(target.host, 'wa.me');
          assert.match(target.searchParams.get('text'), /Acceso & turnos \+ horarios/);
          assert.match(target.searchParams.get('text'), /Empresa: Empresa de prueba/);
          await page.getByLabel('Municipio').fill('Terrassa');
          assert.equal(await link.count(), 0, 'Old quote must disappear after edits');
          report.push({ route, status: response.status(), title: await page.title(), description: await page.locator('meta[name="description"]').getAttribute('content'), schemas: parsed.map(s => s['@type']), viewport, errors });
        }
        await contact.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }));
        assert.ok(await contact.isVisible());
        await contact.focus();
        assert.ok(await contact.evaluate(el => el === document.activeElement));
        await page.keyboard.press('Enter');
        await page.waitForURL(`${base}/contacto`);
        await page.waitForFunction(() => document.querySelector('link[rel="canonical"]')?.getAttribute('href') === 'https://superclim.es/contacto');
        assert.equal(await page.locator('link[rel="canonical"]').count(), 1);
        if (javaScriptEnabled) {
          const contactSchemas = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(JSON.parse);
          assert.ok(contactSchemas.every(schema => schema['@type'] !== 'Service'), 'No B2B Service left on contact');
        }
        assert.deepEqual(errors, []);
        await context.close();
      }
    }
    assert.equal(titles.size, 4); assert.equal(descriptions.size, 4);
    const page = await browser.newPage();
    await page.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
    await page.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.abort());
    const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname);
    for (const path of sitemapPaths) assert.equal((await page.request.get(`${base}${path}`)).status(), 200, path);
    await page.goto(`${base}/`, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('#business-title').count(), 1);
    await page.locator('section[aria-labelledby="business-title"]').screenshot({ path: `${output}/home-business-desktop.png` });
    await page.getByRole('link', { name: 'Ver servicios para empresas', exact: true }).click();
    await page.waitForURL(`${base}${routes[0]}`);
    assert.equal(await page.locator('h1').count(), 1);
    await page.getByRole('link', { name: 'Limpieza de oficinas', exact: true }).click();
    await page.waitForURL(`${base}${routes[1]}`);
    await page.waitForFunction(() => document.querySelector('h1')?.textContent === 'Limpieza profesional de oficinas en Sabadell y Barcelona');
    assert.equal(await page.locator('script[type="application/ld+json"]').count(), 2, (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n'));
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]', 'link[rel="canonical"]']) assert.equal(await page.locator(selector).count(), 1, await page.locator(selector).evaluateAll(els => els.map(el => el.outerHTML).join('\n')));
    await fs.writeFile(`${output}/validation.json`, JSON.stringify({ sitemapRoutes: sitemapPaths.length, results: report }, null, 2));
  } finally {
    await browser?.close();
    await new Promise(resolve => server.httpServer.close(resolve));
  }
});
