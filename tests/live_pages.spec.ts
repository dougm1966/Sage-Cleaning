import { test } from '@playwright/test';

test('screenshot live markets and about', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1080 });
  
  await page.goto('https://www.yoursagecleaning.com/our-markets', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'live_markets.png', fullPage: true });

  await page.goto('https://www.yoursagecleaning.com/about-us', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'live_about.png', fullPage: true });

  await page.goto('https://www.yoursagecleaning.com/services', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'live_services.png', fullPage: true });
});
