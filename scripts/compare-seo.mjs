import fs from 'node:fs/promises';

const oldFile = process.argv[2] || 'audit/old-site-crawl.json';
const newFile = process.argv[3] || 'audit/local-route-check.json';
const outputFile = process.argv[4] || 'audit/seo-comparison.json';

const normalizeText = (value) =>
  (value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const normalizePath = (urlOrPath) => {
  const path = urlOrPath.startsWith('http') ? new URL(urlOrPath).pathname : urlOrPath;
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1);
  return path;
};

const classify = (path) => {
  if (path.includes('/servicios/limpieza-de-sofa')) return 'regional-sofas';
  if (path.includes('/mas-servicios/limpieza-de-colchones')) return 'regional-colchones';
  if (path.includes('/limpieza-de-alfombras/') && path !== '/limpieza-de-alfombras') {
    return 'regional-alfombras';
  }
  if (path.endsWith('.html')) return 'legacy-html';
  return 'principal';
};

const oldCrawl = JSON.parse(await fs.readFile(oldFile, 'utf8'));
const newCheck = JSON.parse(await fs.readFile(newFile, 'utf8'));

const newByPath = new Map(newCheck.results.map((page) => [normalizePath(page.path), page]));
const rows = [];
const seen = new Set();

for (const oldPage of oldCrawl.pages.filter((page) => page.status === 200)) {
  const oldPath = normalizePath(new URL(oldPage.finalUrl).pathname);
  if (seen.has(oldPath)) continue;
  seen.add(oldPath);

  const newPage = newByPath.get(oldPath);
  const oldH1 = oldPage.h1?.[0] || '';
  const newH1 = newPage?.h1?.[0] || '';
  const oldH2 = oldPage.h2 || [];
  const newH2 = newPage?.h2 || [];
  const oldH3 = oldPage.h3 || [];
  const newH3 = newPage?.h3 || [];

  const missingH2 = oldH2.filter(
    (heading) => !newH2.some((candidate) => normalizeText(candidate) === normalizeText(heading))
  );
  const missingH3 = oldH3.filter(
    (heading) => !newH3.some((candidate) => normalizeText(candidate) === normalizeText(heading))
  );

  rows.push({
    path: oldPath,
    type: classify(oldPath),
    status: newPage?.status || null,
    oldTitle: oldPage.title,
    newTitle: newPage?.title || '',
    titleMatches: normalizeText(oldPage.title) === normalizeText(newPage?.title || ''),
    oldMetaDescription: oldPage.metaDescription,
    newMetaDescription: newPage?.metaDescription || '',
    metaMatches:
      normalizeText(oldPage.metaDescription) === normalizeText(newPage?.metaDescription || ''),
    oldCanonical: oldPage.canonical,
    newCanonical: newPage?.canonical || '',
    oldH1,
    newH1,
    h1Matches: normalizeText(oldH1) === normalizeText(newH1),
    oldH2,
    newH2,
    missingH2,
    oldH3,
    newH3,
    missingH3,
    oldBodyLength: oldPage.bodyText?.length || 0,
    newBodyLength: newPage?.bodyText?.length || 0,
    notes: [],
  });
}

const summary = {
  generatedAt: new Date().toISOString(),
  total: rows.length,
  byType: Object.groupBy ? Object.groupBy(rows, (row) => row.type) : {},
  titleMismatches: rows.filter((row) => !row.titleMatches).length,
  metaMismatches: rows.filter((row) => !row.metaMatches).length,
  h1Mismatches: rows.filter((row) => !row.h1Matches).length,
  missingAnyH2: rows.filter((row) => row.missingH2.length > 0).length,
};

await fs.writeFile(outputFile, `${JSON.stringify({ summary, rows }, null, 2)}\n`);
console.log(`Compared ${rows.length} old URLs against local routes`);
console.log(`Title mismatches: ${summary.titleMismatches}`);
console.log(`Meta mismatches: ${summary.metaMismatches}`);
console.log(`H1 mismatches: ${summary.h1Mismatches}`);
console.log(`Rows with missing old H2: ${summary.missingAnyH2}`);
console.log(`Saved ${outputFile}`);
