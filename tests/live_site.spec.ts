import { test } from '@playwright/test';

test('screenshot live site', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1080 });
  await page.goto('https://www.yoursagecleaning.com/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'live_site.png', fullPage: true });
});
