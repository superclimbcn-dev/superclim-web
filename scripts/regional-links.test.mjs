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
