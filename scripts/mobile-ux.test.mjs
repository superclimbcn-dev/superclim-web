import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import test from 'node:test';
import { chromium } from 'playwright';
import { preview } from 'vite';

const expectedLinks = ['/', '/servicios', '/limpieza-de-sofas', '/limpieza-de-alfombras', '/mas-servicios', '/impermeabilizacion-de-sofas', '/limpieza-de-comunidades', '/limpieza-para-empresas', '/limpieza-para-empresas/oficinas', '/limpieza-para-empresas/naves-industriales', '/limpieza-para-empresas/centros-logisticos', '/quienes-somos', '/contacto'];
const artifacts = process.env.UX_ARTIFACTS || '/tmp/superclim-041/mobile';
test('global mobile navigation and safe WhatsApp controls', async () => {
  const server = await preview({ preview: { host: '127.0.0.1', port: 0 } });
  const base = `http://127.0.0.1:${server.httpServer.address().port}`;
  let browser;
  try {
    browser = await chromium.launch({ headless: true, ...(existsSync('/usr/bin/google-chrome') ? { executablePath: '/usr/bin/google-chrome' } : {}) });
    await fs.mkdir(artifacts, { recursive: true });
    const sitemap = await fs.readFile('dist/sitemap.xml', 'utf8');
    const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
    const navigation = [];
    for (const viewport of [{ width: 375, height: 812 }, { width: 390, height: 844 }]) {
      const context = await browser.newContext({ viewport, locale: 'es-ES', isMobile: true, hasTouch: true });
      await context.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
      await context.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.abort());
      const page = await context.newPage();
      const errors = []; page.on('pageerror', e => errors.push(e.message));
      for (const route of routes) {
        assert.equal((await page.goto(base + route)).status(), 200);
        console.log('MENU', viewport.width, route);
        await page.waitForTimeout(600);
        const trigger = page.getByRole('button', { name: 'Abrir menú', exact: true, includeHidden: true });
        await trigger.click();
        const dialog = page.getByRole('dialog', { name: 'Menú principal' });
        await dialog.waitFor();
        assert.equal(await trigger.getAttribute('aria-expanded'), 'true');
        assert.ok(await trigger.getAttribute('aria-controls'));
        for (const title of ['Servicios', 'Comunidades', 'Empresas', 'Empresa']) await dialog.locator('summary').filter({ hasText: new RegExp(`^${title}$`) }).click();
        assert.deepEqual(await dialog.locator('nav a').evaluateAll(els => els.map(el => el.getAttribute('href'))), expectedLinks, route);
        assert.equal(await page.evaluate(() => getComputedStyle(document.body).overflow), 'hidden');
        assert.ok(await dialog.evaluate(el => el.contains(document.activeElement)));
        await page.keyboard.press('Escape');
        await dialog.waitFor({ state: 'hidden' });
        // Radix restores focus after unmount; wait for that observable result.
        await page.waitForFunction(() => document.activeElement?.getAttribute('aria-label') === 'Abrir menú');
        assert.ok(await trigger.evaluate(el => el === document.activeElement));
        assert.equal(await trigger.getAttribute('aria-expanded'), 'false');
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        navigation.push({ route, width: viewport.width });
      }
      // Keyboard activation, focus containment, submenu toggling and real navigation.
      await page.goto(base + '/limpieza-para-empresas/oficinas');
      const trigger = page.getByRole('button', { name: 'Abrir menú', exact: true, includeHidden: true });
      await trigger.focus(); await page.keyboard.press('Enter');
      let dialog = page.getByRole('dialog', { name: 'Menú principal' });
      const summary = dialog.locator('summary').filter({ hasText: /^Empresas$/ });
      await summary.focus(); await page.keyboard.press('Enter');
      assert.equal(await summary.locator('..').getAttribute('open'), '');
      for (let i = 0; i < 24; i++) { await page.keyboard.press('Tab'); assert.ok(await dialog.evaluate(el => el.contains(document.activeElement))); }
      await dialog.screenshot({ path: `${artifacts}/menu-${viewport.width}.png` });
      await dialog.getByRole('link', { name: 'Naves Industriales', exact: true }).click();
      await page.waitForURL(base + '/limpieza-para-empresas/naves-industriales');
      await page.waitForFunction(() => document.activeElement === document.querySelector('main h1'));
      assert.equal(await page.locator('[data-mobile-navigation]').count(), 0);
      await page.getByRole('button', { name: 'Abrir menú', exact: true, includeHidden: true }).click();
      await page.getByRole('button', { name: 'Cerrar menú', exact: true }).click();
      assert.equal(await page.locator('[data-mobile-navigation]').count(), 0);
      // Sample the entire page, including hero, cards, FAQs, form and footer.
      let visibleSamples = 0;
      for (const route of ['/', '/limpieza-de-sofas', '/servicios/limpieza-de-sofas-sant-cugat', '/limpieza-de-sofas/limpieza-de-sofas-a-domicilio', '/limpieza-para-empresas', '/limpieza-para-empresas/oficinas', '/limpieza-para-empresas/naves-industriales', '/limpieza-para-empresas/centros-logisticos']) {
        await page.goto(base + route); await page.waitForTimeout(600);
        const height = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let y = 0; y <= height; y += 350) {
          await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), y); await page.waitForTimeout(100);
          const control = page.locator('.floating-whatsapp a');
          if (await control.count() && await control.isVisible()) {
            visibleSamples++;
            assert.equal(await control.getAttribute('aria-label'), 'WhatsApp');
            const box = await control.boundingBox();
            assert.ok(Math.abs(box.width - 48) < 1 && Math.abs(box.height - 48) < 1, `${route} y=${y} ${JSON.stringify(box)}`);
            assert.ok(box.x >= 0 && box.x + box.width <= viewport.width);
            assert.ok(box.y >= 0 && box.y + box.height <= viewport.height);
            assert.equal(await control.locator('svg:not([aria-hidden="true"])').count(), 0);
            const overlaps = await control.evaluate(el => {
              if (getComputedStyle(el).visibility === 'hidden') return false;
              const a = el.getBoundingClientRect();
              return [...document.querySelectorAll('main p, main h1, main h2, main h3, main li, main summary, main label, main a, main button, main input, main textarea, main select, footer p, footer a, footer h2, footer h3')].some(other => {
                if (other.contains(el)) return false;
                const b = other.getBoundingClientRect();
                return b.width > 0 && b.height > 0 && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
              });
            });
            assert.equal(overlaps, false, `${route} scroll ${y}`);
          }
          assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        }
      }
      assert.ok(visibleSamples > 0, 'Control remains available in safe gaps');
      await page.goto(base + '/limpieza-para-empresas/naves-industriales');
      await page.getByRole('heading', { name: 'Planificación del servicio en Terrassa y Rubí' }).scrollIntoViewIfNeeded();
      await page.waitForTimeout(150);
      await page.screenshot({ path: `${artifacts}/naves-${viewport.width}.png` });
      const control = page.locator('.floating-whatsapp a');
      const href = await control.getAttribute('href');
      await page.getByLabel('Nombre', { exact: false }).focus();
      await page.waitForTimeout(150); assert.equal(await control.isVisible(), false);
      // Reduced viewport simulates the space lost to a virtual keyboard; no actual device keyboard is launched by Chromium headless.
      await page.setViewportSize({ width: viewport.width, height: 440 });
      await page.waitForTimeout(150); assert.equal(await control.isVisible(), false);
      await page.screenshot({ path: `${artifacts}/keyboard-${viewport.width}.png` });
      await page.setViewportSize(viewport);
      await page.evaluate(() => { document.activeElement.blur(); localStorage.removeItem('superclim-cookie-consent'); window.dispatchEvent(new Event('superclim-cookie-consent-change')); });
      await page.waitForTimeout(200); assert.equal(await control.isVisible(), false);
      assert.equal(await control.getAttribute('href'), href);
      await page.screenshot({ path: `${artifacts}/cookies-${viewport.width}.png` });
      assert.deepEqual(errors, []);
      await context.close();
    }
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await desktop.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.abort());
    await desktop.goto(base + '/limpieza-para-empresas/naves-industriales');
    assert.equal(await desktop.getByRole('button', { name: 'Abrir menú' }).isVisible(), false);
    assert.equal(await desktop.locator('.floating-whatsapp a').innerText(), 'WhatsApp');
    assert.ok(await desktop.locator('.floating-whatsapp a').isVisible());
    await fs.writeFile(`${artifacts}/results.json`, JSON.stringify({ navigation, desktop: 'PASS', keyboard: 'focus + viewport simulation', overlap: 'PASS' }, null, 2));
  } finally { await browser?.close(); await new Promise(resolve => server.httpServer.close(resolve)); }
});

test('mobile WhatsApp keeps keyboard focus in a safe position', async () => {
  const server = await preview({ preview: { host: '127.0.0.1', port: 0 } });
  const base = `http://127.0.0.1:${server.httpServer.address().port}`;
  let browser;
  try {
    browser = await chromium.launch({ headless: true, ...(existsSync('/usr/bin/google-chrome') ? { executablePath: '/usr/bin/google-chrome' } : {}) });
    for (const viewport of [{ width: 375, height: 812 }, { width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport, isMobile: true, hasTouch: true });
      await page.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
      await page.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.abort());
      await page.goto(base + '/limpieza-para-empresas/naves-industriales');
      await page.waitForTimeout(700);
      const control = page.locator('.floating-whatsapp a');
      let found = false;
      for (let y = 0; y < 1500; y += 100) {
        await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), y);
        await page.waitForTimeout(100);
        if (await control.isVisible()) { found = true; break; }
      }
      assert.ok(found);
      await control.focus();
      await page.waitForTimeout(200);
      assert.ok(await control.isVisible());
      assert.ok(await control.evaluate(el => document.activeElement === el && el.matches(':focus-visible') && getComputedStyle(el).outlineStyle !== 'none'));
      await page.close();
    }
  } finally { await browser?.close(); await new Promise(resolve => server.httpServer.close(resolve)); }
});
