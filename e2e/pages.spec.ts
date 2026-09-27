import { expect, test } from '@playwright/test';
import { pages } from './pages';

for (const { path, heading } of pages) {
  test.describe(`page ${path}`, () => {
    test('loads directly by URL with its heading', async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
      await expect(page).toHaveTitle(/Milijana Smiljanic/);
    });

    test('is served as pre-rendered HTML', async ({ request }) => {
      const response = await request.get(path);
      expect(response.status()).toBe(200);
      const body = await response.text();
      expect(body).not.toContain('<div id="root"></div>'); // real markup, not an empty shell
      expect(body).toMatch(/<main id="main"[^>]*>.*<h1/s);
      expect(body).toContain(`<link rel="canonical" href="https://milijanadesign.com${path}" />`);
      expect(body).toMatch(/<meta property="og:title" content="[^"]*Milijana Smiljanic[^"]*" \/>/);
    });

    test('hydrates without errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      expect(errors).toEqual([]);
    });

    test('has no horizontal scrolling', async ({ page }) => {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });

    test('loads every image', async ({ page }) => {
      await page.goto(path);
      // Make lazy images load, then wait for all of them.
      await page.evaluate(async () => {
        for (const img of Array.from(document.images)) img.loading = 'eager';
        await Promise.all(
          Array.from(document.images).map((img) =>
            img.complete ? null : new Promise((resolve) => img.addEventListener('load', resolve, { once: true })),
          ),
        );
      });
      const broken = await page.evaluate(() =>
        Array.from(document.images)
          .filter((img) => img.naturalWidth === 0)
          .map((img) => img.src),
      );
      expect(broken).toEqual([]);
    });

    test('shows the header and footer', async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole('link', { name: 'Milijana Smiljanic' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'LinkedIn profile' })).toBeVisible();
    });
  });
}

test('unknown URLs render the not-found page', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  await page.goto('/this-page-does-not-exist');
  await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
  expect(errors).toEqual([]);
  await page.getByRole('link', { name: 'Back to home' }).click();
  await expect(page).toHaveURL('/');
});
