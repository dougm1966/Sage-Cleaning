import { test } from '@playwright/test';

test('take screenshots of all pages', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  // 1. Home Page (Single Page)
  await page.goto('http://127.0.0.1:5173/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshots/rebuild_top.png' });
  
  // Scroll down to the features section with the icons
  await page.locator('h2', { hasText: 'Why Choose SAGE Cleaning?' }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/rebuild_features.png' });

  // Scroll down to footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/rebuild_footer.png' });
});
