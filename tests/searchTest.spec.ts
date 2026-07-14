import { expect, test } from '@playwright/test';

test.describe('Playwright documentation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('opens the installation guide', async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page).toHaveURL(/.*intro/);
    await expect(
      page.getByRole('heading', { name: 'Installation' }),
    ).toBeVisible();
  });

  test('shows the API documentation from top navigation', async ({ page }) => {
    await page.getByRole('link', { name: 'API' }).first().click();

    await expect(page).toHaveURL(/.*api/);
    await expect(
      page.getByRole('heading', { name: /Playwright Library/ }),
    ).toBeVisible();
  });
});
