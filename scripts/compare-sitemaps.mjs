import fs from 'node:fs/promises';

const OLD_SITEMAP_URL = 'https://superclim.es/sitemap.xml';
const NEW_SITEMAP_PATH = new URL('../public/sitemap.xml', import.meta.url);

function extractPaths(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname)
    .sort();
}

async function main() {
  const oldResponse = await fetch(OLD_SITEMAP_URL);

  if (!oldResponse.ok) {
    throw new Error(`Could not fetch ${OLD_SITEMAP_URL}: ${oldResponse.status}`);
  }

  const oldPaths = extractPaths(await oldResponse.text());
  const newPaths = extractPaths(await fs.readFile(NEW_SITEMAP_PATH, 'utf8'));
  const newPathSet = new Set(newPaths);
  const missing = oldPaths.filter((path) => !newPathSet.has(path));
  const extra = newPaths.filter((path) => !oldPaths.includes(path));

  console.log(`Old sitemap URLs: ${oldPaths.length}`);
  console.log(`New sitemap URLs: ${newPaths.length}`);
  console.log(`Old URLs present in new sitemap: ${oldPaths.length - missing.length}/${oldPaths.length}`);
  console.log(`Extra URLs in new sitemap: ${extra.length}`);

  if (missing.length) {
    console.log('\nMissing URLs:');
    for (const path of missing) {
      console.log(`- ${path}`);
    }
    process.exitCode = 1;
  } else {
    console.log('\nOK: every old sitemap URL is present in the new sitemap.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
