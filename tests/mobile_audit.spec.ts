import { test } from '@playwright/test';

const BASE = 'http://localhost:4321';

const PAGES: { name: string; path: string }[] = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'markets', path: '/markets' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'locations-index', path: '/locations' },
  { name: 'city-powell', path: '/locations/powell' },
  { name: 'city-cody', path: '/locations/cody' },
  { name: 'city-basin', path: '/locations/basin' },
  { name: 'city-greybull', path: '/locations/greybull' },
  { name: 'city-lovell', path: '/locations/lovell' },
  { name: 'city-meeteetse', path: '/locations/meeteetse' },
  { name: 'city-byron', path: '/locations/byron' },
  { name: 'city-cowley', path: '/locations/cowley' },
  { name: 'city-deaver', path: '/locations/deaver' },
  { name: 'city-frannie', path: '/locations/frannie' },
  { name: 'city-ralston', path: '/locations/ralston' },
  { name: 'city-garland', path: '/locations/garland' },
  { name: 'city-service-powell-residential', path: '/locations/powell/residential-cleaning' },
  { name: 'city-service-cody-commercial', path: '/locations/cody/commercial-cleaning' },
];

const VIEWPORTS = [
  { name: '360', w: 360, h: 800 },
  { name: '414', w: 414, h: 900 },
  { name: '768', w: 768, h: 1024 },
];

for (const vp of VIEWPORTS) {
  test.describe(`mobile audit @${vp.name}`, () => {
    test.use({ viewport: { width: vp.w, height: vp.h } });

    for (const p of PAGES) {
      test(`${p.name}`, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (err) => errors.push(String(err)));

        await page.goto(BASE + p.path, { waitUntil: 'networkidle' });
        await page.waitForTimeout(800);

        await page.screenshot({
          path: `screenshots/mobile/${vp.name}/${p.name}_top.png`,
          fullPage: false,
        });

        // Detect horizontal overflow
        const overflow = await page.evaluate(() => {
          const docW = document.documentElement.scrollWidth;
          const winW = window.innerWidth;
          const offenders: { tag: string; cls: string; w: number }[] = [];
          if (docW > winW) {
            document.querySelectorAll<HTMLElement>('*').forEach((el) => {
              const r = el.getBoundingClientRect();
              if (r.right > winW + 1 || r.left < -1) {
                if (offenders.length < 8) {
                  offenders.push({
                    tag: el.tagName,
                    cls: (el.className || '').toString().slice(0, 80),
                    w: Math.round(r.right - r.left),
                  });
                }
              }
            });
          }
          return { docW, winW, overflow: docW > winW, offenders };
        });

        // Full page screenshot for full audit
        await page.screenshot({
          path: `screenshots/mobile/${vp.name}/${p.name}_full.png`,
          fullPage: true,
        });

        console.log(
          JSON.stringify({
            page: p.name,
            vp: vp.name,
            ...overflow,
            errors,
          }),
        );
      });
    }
  });
}
