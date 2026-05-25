import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const baseUrl = 'https://superclim.es';

const routeConfigKeys = new Map([
  ['/', 'home'],
  ['/servicios', 'services'],
  ['/limpieza-de-sofas', 'sofaCleaning'],
  ['/limpieza-de-alfombras', 'carpetCleaning'],
  ['/mas-servicios', 'mattressCleaning'],
  ['/impermeabilizacion-de-sofas', 'impermeabilization'],
  ['/limpieza-de-sofas/limpieza-de-sillones', 'armchairCleaning'],
  ['/limpieza-de-sofas/limpieza-de-sofas-a-domicilio', 'homeService'],
  ['/quienes-somos', 'about'],
  ['/contacto', 'contact'],
  ['/restauracion-de-alfombras', 'restoration'],
  ['/limpieza-de-muebles-en-cuero', 'leatherCleaning'],
  ['/servicios/limpieza-tapiceria-coche-sabadell', 'carUpholsterySabadell'],
]);

function loadSeoModule() {
  const sourcePath = path.join(rootDir, 'src/config/seo.ts');
  const source = fs.readFileSync(sourcePath, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const context = {
    exports: {},
  };
  vm.createContext(context);
  vm.runInContext(output, context, { filename: sourcePath });
  return context.exports;
}

function getSitemapRoutes() {
  const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
    const url = new URL(match[1]);
    return normalizePath(url.pathname);
  });
}

function normalizePath(routePath) {
  if (routePath === '/') {
    return routePath;
  }
  return routePath.endsWith('/') ? routePath.slice(0, -1) : routePath;
}

function displayNameFromSlug(routePath) {
  const slug = routePath.split('/').at(-1) ?? '';
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getConfigForRoute(routePath, seoModule) {
  const key = routeConfigKeys.get(routePath);
  if (key) {
    return seoModule.seoConfig[key];
  }

  if (routePath.startsWith('/servicios/limpieza-de-sofa')) {
    return seoModule.getRegionalSEO('sofas', displayNameFromSlug(routePath), routePath);
  }

  if (routePath.startsWith('/mas-servicios/limpieza-de-colchones')) {
    return seoModule.getRegionalSEO('colchones', displayNameFromSlug(routePath), routePath);
  }

  if (routePath.startsWith('/limpieza-de-alfombras/')) {
    return seoModule.getRegionalSEO('alfombras', displayNameFromSlug(routePath), routePath);
  }

  throw new Error(`No SEO config found for route: ${routePath}`);
}

function escapeText(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeAttr(value) {
  return escapeText(value).replaceAll('"', '&quot;');
}

function upsertMetaName(html, name, content) {
  const tag = `<meta name="${name}" content="${escapeAttr(content)}">`;
  const pattern = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, 'i');
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function upsertMetaProperty(html, property, content) {
  const tag = `<meta property="${property}" content="${escapeAttr(content)}">`;
  const pattern = new RegExp(`<meta\\s+property=["']${property}["'][^>]*>`, 'i');
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function upsertCanonical(html, href) {
  const tag = `<link rel="canonical" href="${escapeAttr(href)}" />`;
  const pattern = /<link\s+rel=["']canonical["'][^>]*>/i;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function renderHtml(template, config) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeText(config.title)}</title>`);

  html = upsertCanonical(html, config.canonical);
  html = upsertMetaName(html, 'description', config.description);
  html = upsertMetaName(html, 'robots', config.noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  if (config.keywords) {
    html = upsertMetaName(html, 'keywords', config.keywords);
  }

  html = upsertMetaProperty(html, 'og:title', config.ogTitle || config.title);
  html = upsertMetaProperty(html, 'og:description', config.ogDescription || config.description);
  html = upsertMetaProperty(html, 'og:url', config.canonical);
  html = upsertMetaProperty(html, 'og:type', config.ogType || 'website');
  html = upsertMetaProperty(html, 'og:locale', 'es_ES');

  if (config.ogImage) {
    html = upsertMetaProperty(html, 'og:image', config.ogImage);
    html = upsertMetaName(html, 'twitter:image', config.ogImage);
  }

  html = upsertMetaName(html, 'twitter:card', 'summary_large_image');
  html = upsertMetaName(html, 'twitter:title', config.ogTitle || config.title);
  html = upsertMetaName(html, 'twitter:description', config.ogDescription || config.description);

  return html;
}

function writeRouteHtml(routePath, html) {
  if (routePath === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html);
    return;
  }

  const htmlFilePath = path.join(distDir, `${routePath}.html`);
  fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });
  fs.writeFileSync(htmlFilePath, html);

  const routeDir = path.join(distDir, routePath);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
}

const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');
const seoModule = loadSeoModule();
const routes = [...new Set(getSitemapRoutes())];

for (const routePath of routes) {
  const config = getConfigForRoute(routePath, seoModule);
  if (!config?.canonical || !config?.title || !config?.description) {
    throw new Error(`Incomplete SEO config for route: ${routePath}`);
  }
  writeRouteHtml(routePath, renderHtml(template, config));
}

console.log(`Prerendered SEO metadata for ${routes.length} routes.`);
