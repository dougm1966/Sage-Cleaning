#!/usr/bin/env node
// Pre-launch scan — runs against dist/ after `astro build`.
// Fails (exit 1) on critical issues, warns on minor.

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';

const DIST = 'dist';
const SITE = 'https://sagecleaning.com';

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

async function fileExists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function main() {
  if (!(await fileExists(DIST))) {
    err(`${DIST}/ not found — run \`npm run build\` first.`);
    return finish();
  }

  // Required files
  const required = [
    'index.html',
    'robots.txt',
    'sitemap.xml',
    '.htaccess',
    'favicon.svg',
  ];
  for (const f of required) {
    if (!(await fileExists(join(DIST, f)))) err(`Missing required file: ${f}`);
  }

  // Sitemap freshness + content
  const sitemapPath = join(DIST, 'sitemap.xml');
  if (await fileExists(sitemapPath)) {
    const xml = await readFile(sitemapPath, 'utf8');
    const today = new Date().toISOString().split('T')[0];
    const urlCount = (xml.match(/<url>/g) || []).length;
    if (urlCount < 5) err(`Sitemap only has ${urlCount} URLs — generation likely broken.`);
    if (!xml.includes(today)) warn(`Sitemap lastmod does not include today (${today}).`);
    if (!xml.includes(SITE)) err(`Sitemap missing canonical site URL ${SITE}.`);
  }

  // Robots.txt
  const robotsPath = join(DIST, 'robots.txt');
  if (await fileExists(robotsPath)) {
    const txt = await readFile(robotsPath, 'utf8');
    if (!/Sitemap:\s*https?:\/\//i.test(txt)) err('robots.txt missing Sitemap: directive.');
    if (!/User-agent:/i.test(txt)) err('robots.txt missing User-agent directive.');
  }

  // Scan HTML files for common issues
  const htmlFiles = [];
  for await (const p of walk(DIST)) {
    if (extname(p) === '.html') htmlFiles.push(p);
  }

  if (htmlFiles.length === 0) err('No HTML files in dist/.');

  const secretPatterns = [
    /sk_live_[A-Za-z0-9]{20,}/,
    /AIza[0-9A-Za-z_-]{35}/,
    /AKIA[0-9A-Z]{16}/,
    /ghp_[A-Za-z0-9]{36}/,
    /xox[baprs]-[A-Za-z0-9-]{10,}/,
  ];

  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const rel = relative(DIST, file);

    if (!/<title>[^<]+<\/title>/i.test(html)) warn(`${rel}: missing or empty <title>.`);
    if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(html))
      warn(`${rel}: missing meta description.`);
    if (!/<html[^>]+lang=/i.test(html)) warn(`${rel}: <html> missing lang attribute.`);
    if (/<img(?![^>]*\salt=)/i.test(html)) warn(`${rel}: <img> tag without alt attribute.`);
    // Insecure links — ignore XML namespaces (w3.org, schema.org, purl.org) which are URIs not URLs
    const httpLinks = (html.match(/http:\/\/[^\s"'<>]+/gi) || [])
      .filter((u) => !/^http:\/\/(www\.)?(w3\.org|schema\.org|purl\.org|ns\.adobe\.com|sketch\.com|inkscape\.org|localhost|127\.)/i.test(u));
    if (httpLinks.length) warn(`${rel}: insecure http:// link → ${httpLinks[0]}`);
    if (/TODO|FIXME|XXX|lorem ipsum/i.test(html)) warn(`${rel}: contains placeholder text (TODO/FIXME/lorem).`);
    if (/console\.(log|debug|info)\s*\(/.test(html)) warn(`${rel}: contains console.log statements.`);

    for (const re of secretPatterns) {
      if (re.test(html)) err(`${rel}: possible leaked secret matching ${re}.`);
    }
  }

  // .htaccess sanity
  const htaccessPath = join(DIST, '.htaccess');
  if (await fileExists(htaccessPath)) {
    const ht = await readFile(htaccessPath, 'utf8');
    const expected = [
      'Strict-Transport-Security',
      'X-Content-Type-Options',
      'X-Frame-Options',
      'Referrer-Policy',
      'Content-Security-Policy',
    ];
    for (const h of expected) {
      if (!ht.includes(h)) err(`.htaccess missing security header: ${h}`);
    }
    if (!/RewriteCond %\{HTTPS\} off/i.test(ht)) err('.htaccess missing HTTPS redirect.');
  }

  finish();
}

function finish() {
  console.log('\n=== Pre-launch scan ===');
  if (warnings.length) {
    console.log(`\n⚠  ${warnings.length} warning(s):`);
    for (const w of warnings) console.log('  - ' + w);
  }
  if (errors.length) {
    console.log(`\n✗  ${errors.length} error(s):`);
    for (const e of errors) console.log('  - ' + e);
    console.log('\nFAILED — fix errors before launching.\n');
    process.exit(1);
  }
  console.log(`\n✓  Passed (${warnings.length} warnings).\n`);
}

main().catch((e) => {
  console.error('Scan crashed:', e);
  process.exit(1);
});
