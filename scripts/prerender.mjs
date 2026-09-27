// Writes a static HTML file per route so every URL is served with a 200 status and real
// content (titles, descriptions, social previews). Runs after `vite build` and the SSR build.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
const siteUrl = 'https://milijana95.github.io';

const { render, prerenderPaths } = await import(join(ssrDir, 'entry-server.js'));
const template = await readFile(join(dist, 'index.html'), 'utf8');

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function replaceOnce(html, pattern, replacement, label) {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: ${label} not found in index.html`);
  // A replacer function keeps `$` sequences in page content (e.g. "$0 Budget") literal.
  return html.replace(pattern, () => replacement);
}

function renderPage(path, { notFound = false } = {}) {
  const { html, meta } = render(path);
  const url = `${siteUrl}${path === '/' ? '/' : path}`;
  let page = template;
  page = replaceOnce(page, /<title>[^<]*<\/title>/, `<title>${escapeText(meta.title)}</title>`, 'title');
  page = replaceOnce(
    page,
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    'description',
  );
  page = replaceOnce(
    page,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    'og:title',
  );
  page = replaceOnce(
    page,
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    'og:description',
  );
  if (notFound) {
    page = page
      .replace(/\s*<link rel="canonical" href="[^"]*" \/>/, '\n    <meta name="robots" content="noindex" />')
      .replace(/\s*<meta property="og:url" content="[^"]*" \/>/, '');
  } else {
    page = replaceOnce(page, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical');
    page = replaceOnce(page, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  }
  return replaceOnce(page, '<div id="root"></div>', `<div id="root">${html}</div>`, 'root element');
}

// GitHub Pages serves `/projects` from `projects.html` without a redirect.
const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`);

for (const path of prerenderPaths) {
  await writeFile(join(dist, fileFor(path)), renderPage(path));
  console.log(`prerendered ${path} -> ${fileFor(path)}`);
}
await writeFile(join(dist, '404.html'), renderPage('/404', { notFound: true }));
console.log('prerendered 404.html');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${prerenderPaths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

await rm(ssrDir, { recursive: true, force: true });
