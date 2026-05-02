import type { APIRoute } from 'astro';
import { locations } from '../data/locations';
import { services } from '../data/services';

const SITE = 'https://sagecleaning.com';

const staticPaths = ['', '/services', '/markets', '/about', '/contact', '/locations'];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  const urls: string[] = [];

  for (const path of staticPaths) {
    const priority = path === '' ? '1.0' : '0.8';
    urls.push(
      `<url><loc>${SITE}${path}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`
    );
  }

  for (const loc of locations) {
    urls.push(
      `<url><loc>${SITE}/locations/${loc.slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
    );
    for (const svc of services) {
      urls.push(
        `<url><loc>${SITE}/locations/${loc.slug}/${svc.slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
