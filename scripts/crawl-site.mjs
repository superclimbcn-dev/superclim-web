import fs from 'node:fs/promises';
import { chromium } from 'playwright';

const startUrl = process.argv[2] || 'https://superclim.es/';
const outputFile = process.argv[3] || 'audit/site-crawl.json';
const maxPages = Number(process.argv[4] || 300);
const origin = new URL(startUrl).origin;

const normalizeUrl = (href) => {
  try {
    const url = new URL(href, origin);
    url.hash = '';
    if (url.origin !== origin) return null;
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    return url.href;
  } catch {
    return null;
  }
};

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  userAgent:
    'Mozilla/5.0 (compatible; SuperclimMigrationAudit/1.0; +https://superclim.es)',
});

const queue = [new URL(startUrl).href];
const seen = new Set();
const pages = [];

while (queue.length > 0 && seen.size < maxPages) {
  const url = queue.shift();
  if (!url || seen.has(url)) continue;
  seen.add(url);

  let response = null;
  let error = null;

  try {
    response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }

  const finalUrl = page.url();
  const pageData = await page
    .evaluate(() => {
      const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
      const attr = (selector, name) => document.querySelector(selector)?.getAttribute(name) || '';
      const allText = (selector) =>
        [...document.querySelectorAll(selector)]
          .map((element) => element.textContent?.trim())
          .filter(Boolean);

      return {
        title: document.title,
        metaDescription: attr('meta[name="description"]', 'content'),
        robots: attr('meta[name="robots"]', 'content'),
        canonical: attr('link[rel="canonical"]', 'href'),
        h1: allText('h1'),
        h2: allText('h2'),
        h3: allText('h3'),
        bodyText: document.body?.innerText?.replace(/\s+/g, ' ').trim().slice(0, 20000) || '',
        jsonLdTypes: [...document.querySelectorAll('script[type="application/ld+json"]')]
          .map((script) => {
            try {
              const parsed = JSON.parse(script.textContent || '{}');
              if (Array.isArray(parsed)) return parsed.map((item) => item['@type']).filter(Boolean);
              if (parsed['@graph']) return parsed['@graph'].map((item) => item['@type']).filter(Boolean);
              return parsed['@type'] ? [parsed['@type']] : [];
            } catch {
              return ['INVALID_JSON_LD'];
            }
          })
          .flat(),
        links: [...document.querySelectorAll('a[href]')]
          .map((anchor) => ({
            href: anchor.href,
            text: anchor.textContent?.replace(/\s+/g, ' ').trim() || '',
          }))
          .filter((link) => link.href),
        navLinks: [...document.querySelectorAll('nav a[href], header a[href], footer a[href]')]
          .map((anchor) => ({
            href: anchor.href,
            text: anchor.textContent?.replace(/\s+/g, ' ').trim() || '',
          }))
          .filter((link) => link.href),
      };
    })
    .catch(() => ({
      title: '',
      metaDescription: '',
      robots: '',
      canonical: '',
      h1: [],
      h2: [],
      h3: [],
      bodyText: '',
      jsonLdTypes: [],
      links: [],
      navLinks: [],
    }));

  const redirectsToHome =
    new URL(url).pathname !== '/' && new URL(finalUrl).origin === origin && new URL(finalUrl).pathname === '/';

  pages.push({
    requestedUrl: url,
    finalUrl,
    status: response?.status() || null,
    ok: response?.ok() || false,
    redirected: finalUrl !== url,
    redirectsToHome,
    error,
    ...pageData,
  });

  for (const link of pageData.links) {
    const nextUrl = normalizeUrl(link.href);
    if (nextUrl && !seen.has(nextUrl) && !queue.includes(nextUrl)) {
      queue.push(nextUrl);
    }
  }
}

await browser.close();

const report = {
  crawledAt: new Date().toISOString(),
  startUrl,
  origin,
  totalPages: pages.length,
  pages,
};

await fs.writeFile(outputFile, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Crawled ${pages.length} pages from ${origin}`);
console.log(`Saved ${outputFile}`);
