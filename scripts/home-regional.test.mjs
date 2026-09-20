import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import test from 'node:test';
import { chromium } from 'playwright';
import { preview } from 'vite';

const expected = [
  ['Sabadell', '/limpieza-para-empresas/oficinas/sabadell', 'Limpieza de oficinas en Sabadell'],
  ['Sabadell', '/limpieza-para-empresas/naves-industriales/sabadell', 'Limpieza de naves industriales en Sabadell'],
  ['Sant Cugat del Vallès', '/limpieza-para-empresas/oficinas/sant-cugat', 'Limpieza de oficinas en Sant Cugat'],
  ['Terrassa', '/limpieza-para-empresas/oficinas/terrassa', 'Limpieza de oficinas en Terrassa'],
  ['Terrassa', '/limpieza-para-empresas/naves-industriales/terrassa', 'Limpieza de naves industriales en Terrassa'],
  ['Rubí', '/limpieza-para-empresas/naves-industriales/rubi', 'Limpieza de naves industriales en Rubí'],
];
test('Home city cards expose six published B2B links in compact service groups', async () => {
  const server = process.env.HOME_REGIONAL_BASE ? undefined : await preview({ preview: { host: '127.0.0.1', port: 0 } });
  const base = process.env.HOME_REGIONAL_BASE || `http://127.0.0.1:${server.httpServer.address().port}`;
  const artifacts = process.env.HOME_REGIONAL_ARTIFACTS || '/tmp/superclim-045/local';
  await fs.mkdir(artifacts, { recursive: true });
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true });
  try {
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 375, height: 812 }, { width: 390, height: 844 }]) {
      const context = await browser.newContext({ viewport, locale: 'es-ES' });
      await context.addInitScript(() => localStorage.setItem('superclim-cookie-consent', 'rejected'));
      await context.route('**/*', r => new URL(r.request().url()).origin === base ? r.continue() : r.abort());
      const page = await context.newPage(); const errors = []; page.on('pageerror', error => errors.push(error.message));
      assert.equal((await page.goto(base + '/')).status(), 200);
      await page.locator('[data-regional-home]').first().waitFor();
      for (const selector of ['title', 'h1', 'meta[name="description"]', 'meta[name="robots"]', 'link[rel="canonical"]']) assert.equal(await page.locator(selector).count(), 1);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://superclim.es/');
      assert.equal(await page.locator('[data-regional-home]').count(), 6);
      assert.equal(await page.locator('[data-regional-group="business"]').count(), 4);
      assert.equal(await page.locator('[data-regional-group="specialized"]').count(), 5);
      assert.equal(await page.locator('[data-regional-group="business"] a').count(), 6);
      const section = page.locator('section').filter({ has: page.locator('[data-regional-home]') });
      await section.locator('h2').scrollIntoViewIfNeeded(); await page.waitForTimeout(800);
      for (const [city, path, anchor] of expected) {
        const card = section.locator('.group.h-full').filter({ has: page.getByRole('heading', { name: city, exact: true }) });
        assert.equal(await card.count(), 1);
        const link = card.getByRole('link', { name: anchor, exact: true });
        assert.equal(await link.getAttribute('href'), path);
        assert.equal(await card.getByRole('link', { name: 'Cómo llegar', exact: true }).count(), 1);
        assert.ok(await card.locator('a').count() <= 7, 'At most six service links plus directions');
        await link.scrollIntoViewIfNeeded(); await page.waitForTimeout(100);
        assert.ok(await link.isVisible());
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        if (viewport.width === 1440) assert.equal((await context.request.get(base + path, { maxRedirects: 0 })).status(), 200);
      }
      const sabadell = section.locator('.group.h-full').filter({ has: page.getByRole('heading', { name: 'Sabadell', exact: true }) });
      await sabadell.scrollIntoViewIfNeeded(); await page.waitForTimeout(300);
      await page.screenshot({ path: `${artifacts}/home-${viewport.width}.png` });
      const link = sabadell.getByRole('link', { name: expected[0][2], exact: true });
      await page.keyboard.press('Tab'); await link.focus();
      assert.ok(await link.evaluate(el => el === document.activeElement && getComputedStyle(el).outlineStyle !== 'none'));
      await page.evaluate(() => { window.__homeRegionalDocument = true; });
      await page.keyboard.press('Enter'); await page.waitForURL(base + expected[0][1]);
      await page.waitForFunction(() => document.querySelector('h1')?.textContent === 'Limpieza de oficinas en Sabadell');
      assert.ok(await page.evaluate(() => window.__homeRegionalDocument));
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://superclim.es' + expected[0][1]);
      assert.equal(await page.locator('script[type="application/ld+json"]').count(), 2);
      assert.deepEqual(errors, []); await context.close();
    }
  } finally { await browser.close(); if (server) await new Promise(resolve => server.httpServer.close(resolve)); }
});
