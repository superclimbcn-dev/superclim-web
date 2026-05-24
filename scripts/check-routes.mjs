import fs from 'node:fs/promises';
import { chromium } from 'playwright';

const baseUrl = process.argv[2] || 'http://127.0.0.1:5173';
const inputFile = process.argv[3] || 'audit/old-site-crawl.json';
const outputFile = process.argv[4] || 'audit/local-route-check.json';

const oldCrawl = JSON.parse(await fs.readFile(inputFile, 'utf8'));
const paths = [
  ...new Set(
    oldCrawl.pages
      .filter((page) => page.status === 200)
      .flatMap((page) => [new URL(page.requestedUrl).pathname, new URL(page.finalUrl).pathname])
  ),
].sort();

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const results = [];

for (const path of paths) {
  const url = `${baseUrl}${path}`;
  let status = null;
  let error = null;

  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    status = response?.status() || null;
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }

  const data = await page
    .evaluate(() => ({
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      h1: [...document.querySelectorAll('h1')]
        .map((element) => element.textContent?.trim())
        .filter(Boolean),
      h2: [...document.querySelectorAll('h2')]
        .map((element) => element.textContent?.trim())
        .filter(Boolean),
      h3: [...document.querySelectorAll('h3')]
        .map((element) => element.textContent?.trim())
        .filter(Boolean),
      bodyText: document.body?.innerText?.replace(/\s+/g, ' ').trim().slice(0, 20000) || '',
      bodyLength: document.body?.innerText?.trim().length || 0,
    }))
    .catch(() => ({
      title: '',
      metaDescription: '',
      canonical: '',
      h1: [],
      h2: [],
      h3: [],
      bodyText: '',
      bodyLength: 0,
    }));

  results.push({
    path,
    url,
    status,
    error,
    blank: data.bodyLength < 200 || data.h1.length === 0,
    ...data,
  });
}

await browser.close();

const report = {
  checkedAt: new Date().toISOString(),
  baseUrl,
  totalRoutes: results.length,
  blankOrMissing: results.filter((result) => result.blank || result.error).length,
  results,
};

await fs.writeFile(outputFile, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Checked ${results.length} routes against ${baseUrl}`);
console.log(`Blank or missing: ${report.blankOrMissing}`);
console.log(`Saved ${outputFile}`);
