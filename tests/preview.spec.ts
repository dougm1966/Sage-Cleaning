import { test } from '@playwright/test';

test.use({ viewport: { width: 360, height: 800 } });

test('contact email card after fix', async ({ page }) => {
  await page.goto('http://localhost:4321/contact', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const card = page.locator('a[href^="mailto:"]').first();
  await card.waitFor({ state: 'attached', timeout: 5000 });
  await card.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await card.screenshot({ path: 'screenshots/preview/contact_email_after.png' });
});

test('city page intro + form after fix', async ({ page }) => {
  await page.goto('http://localhost:4321/locations/powell', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  // Intro section
  await page.screenshot({ path: 'screenshots/preview/city_intro_after.png', fullPage: false });
  // Form area — scroll to its top edge precisely
  await page.evaluate(() => {
    const el = document.getElementById('city-quote');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
    }
  });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'screenshots/preview/city_form_after.png', fullPage: false });
});

test('city page tablet 768', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('http://localhost:4321/locations/powell', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/preview/city_768_after.png', fullPage: false });
});

test('city page desktop 1280', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('http://localhost:4321/locations/powell', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/preview/city_1280_after.png', fullPage: false });
});
