import { expect, test, type Page } from '@playwright/test';

const isMobile = (page: Page) => (page.viewportSize()?.width ?? 0) < 768;

/** Clicks a main-nav link, opening the mobile menu first when needed. */
async function navigateTo(page: Page, label: string) {
  if (isMobile(page)) await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: label }).click();
}

test('main navigation moves between the top-level pages', async ({ page }) => {
  await page.goto('/');

  await navigateTo(page, 'Projects');
  await expect(page).toHaveURL('/projects');
  await expect(page.getByRole('heading', { level: 1, name: 'Projects' })).toBeVisible();

  await navigateTo(page, 'About me');
  await expect(page).toHaveURL('/about-me');
  await expect(page.getByRole('heading', { level: 1, name: 'About me' })).toBeVisible();

  await navigateTo(page, 'Home');
  await expect(page).toHaveURL('/');
});

test('the current section is highlighted, including on case studies', async ({ page }) => {
  await page.goto('/edge');
  if (isMobile(page)) await page.getByRole('button', { name: 'Open menu' }).click();
  const current = page.getByRole('navigation', { name: 'Main' }).locator('[aria-current="page"]');
  await expect(current).toHaveText('Projects');
});

test('"View my work" leads to the projects page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'View my work' }).click();
  await expect(page).toHaveURL('/projects');
});

test('featured work links open the full stories', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'See the full story: Edge UX Optimization Research' }).click();
  await expect(page).toHaveURL('/edge');
  await expect(page.getByRole('heading', { level: 1, name: 'Edge UX Optimization' })).toBeVisible();
});

test('a project card is clickable anywhere on the card', async ({ page }) => {
  await page.goto('/projects');
  const card = page.getByRole('article').filter({ hasText: 'Micetro - Understanding Console Strengths' });
  await card.click({ position: { x: 40, y: 40 } }); // on the image, away from the link text
  await expect(page).toHaveURL('/micetro');
});

test('private case studies are not links', async ({ page }) => {
  await page.goto('/projects');
  const card = page.getByRole('article').filter({ hasText: 'Copilot in Word - Mulitimodality' });
  await expect(card.getByRole('link')).toHaveCount(0);
  await expect(card).toContainText('Request, private case study');
});

test('related stories on articles navigate to other pages', async ({ page }) => {
  await page.goto('/my-practical-playbook-for-making-research-stick');
  const related = page.getByRole('region', { name: 'More stories & insights' });
  await related.getByRole('link', { name: /Stop Building Products Only for Power Users/ }).click();
  await expect(page).toHaveURL('/stop-building-products-only-for-power-users');
});

test('navigating to a new page starts at the top', async ({ page }) => {
  await page.goto('/projects');
  await page.mouse.wheel(0, 2000);
  await page.getByRole('article').filter({ hasText: 'Integrity X' }).click();
  await expect(page).toHaveURL('/integrity');
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});

test('external links open in a new tab', async ({ page }) => {
  await page.goto('/about-me');
  await expect(page.getByRole('link', { name: 'Download Full CV' })).toHaveAttribute('target', '_blank');
  await expect(page.getByRole('link', { name: 'LinkedIn profile' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/milijana-smiljanic/',
  );
});

test.describe('near-miss URLs', () => {
  for (const [requested, expected, heading] of [
    ['/projects/', '/projects', 'Projects'],
    ['/Edge', '/edge', 'Edge UX Optimization'],
    ['/about-me/?ref=cv#main', '/about-me?ref=cv#main', 'About me'],
  ] as const) {
    test(`${requested} redirects to the real page`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));

      await page.goto(requested);
      await expect(page).toHaveURL(expected);
      await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
      expect(errors).toEqual([]);
    });
  }
});

test('Back returns to the previous scroll position', async ({ page }) => {
  await page.goto('/projects');
  const card = page.getByRole('article').filter({ hasText: 'Integrity X' });
  await card.scrollIntoViewIfNeeded();
  const before = await page.evaluate(() => window.scrollY);
  expect(before).toBeGreaterThan(200);

  await card.click();
  await expect(page).toHaveURL('/integrity');
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);

  await page.goBack();
  await expect(page).toHaveURL('/projects');
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(before - 5);
});
