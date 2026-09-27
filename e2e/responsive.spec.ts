import { expect, test } from '@playwright/test';

test.describe('mobile', () => {
  test.beforeEach(({ page }) => {
    test.skip((page.viewportSize()?.width ?? 0) >= 768, 'mobile-only behaviour');
  });

  test('navigation is collapsed behind a menu button', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Main' });
    const button = page.getByRole('button', { name: 'Open menu' });

    await expect(nav).toBeHidden();
    await button.click();
    await expect(nav).toBeVisible();
    await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(nav).toBeHidden();
  });

  test('the menu closes after choosing a page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'About me' }).click();
    await expect(page).toHaveURL('/about-me');
    await expect(page.getByRole('navigation', { name: 'Main' })).toBeHidden();
  });

  test('featured work stacks the image above the text', async ({ page }) => {
    await page.goto('/');
    const row = page.getByRole('listitem').filter({ hasText: 'Edge UX Optimization Research' });
    const image = await row.getByRole('img').boundingBox();
    const title = await row.getByRole('heading').boundingBox();
    expect(image!.y + image!.height).toBeLessThanOrEqual(title!.y);
  });

  test('the footer keeps only the logo and LinkedIn icon', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Let’s stay in touch, my email is:')).toBeHidden();
    await expect(page.getByRole('link', { name: 'LinkedIn profile' })).toBeVisible();
  });
});

test.describe('tablet and desktop', () => {
  test.beforeEach(({ page }) => {
    test.skip((page.viewportSize()?.width ?? 0) < 768, 'wide-screen behaviour');
  });

  test('navigation links are always visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeHidden();
    const nav = page.getByRole('navigation', { name: 'Main' });
    for (const label of ['Home', 'Projects', 'About me']) {
      await expect(nav.getByRole('link', { name: label })).toBeVisible();
    }
  });

  test('the footer shows the contact email', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'milijana95@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:milijana95@gmail.com',
    );
  });
});

test.describe('desktop', () => {
  test.beforeEach(({ page }) => {
    test.skip((page.viewportSize()?.width ?? 0) < 1024, 'desktop-only layout');
  });

  test('featured work sits side by side and alternates', async ({ page }) => {
    await page.goto('/');
    const rows = page.getByRole('region', { name: 'Featured Work' }).getByRole('listitem');
    const sides = [];
    for (let i = 0; i < 3; i++) {
      const image = await rows.nth(i).getByRole('img').boundingBox();
      const title = await rows.nth(i).getByRole('heading').boundingBox();
      expect(Math.abs(image!.y + image!.height / 2 - (title!.y + title!.height / 2))).toBeLessThan(250);
      sides.push(image!.x > title!.x ? 'right' : 'left');
    }
    expect(sides).toEqual(['right', 'left', 'right']);
  });

  test('projects are laid out three per row', async ({ page }) => {
    await page.goto('/projects');
    const cards = page.getByRole('article');
    const tops = await Promise.all([0, 1, 2, 3].map(async (i) => (await cards.nth(i).boundingBox())!.y));
    expect(tops[0]).toBe(tops[1]);
    expect(tops[1]).toBe(tops[2]);
    expect(tops[3]).toBeGreaterThan(tops[0]);
  });
});
