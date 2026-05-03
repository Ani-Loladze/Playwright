import { test, expect } from '@playwright/test';

const TEST_EMAIL = 'customer@practicesoftwaretesting.com';
const TEST_PASSWORD = 'welcome01';

test('User adds favorite item', async ({ page }) => {
  await page.goto('/auth/login');

  await page.locator('[data-test="email"]').fill(TEST_EMAIL);
  await page.locator('[data-test="password"]').fill(TEST_PASSWORD);
  await page.locator('[data-test="login-submit"]').click();

  await page.waitForURL(url => !url.href.includes('/auth/login'), { timeout: 10000 });
  await page.waitForLoadState('networkidle');
  await page.goto('/');
  await page.waitForSelector('.card.skeleton', { state: 'detached', timeout: 10000 });
  await page.waitForSelector('.card:not(.skeleton)', { timeout: 10000 });
  await Promise.all([
    page.waitForURL(url => url.href !== 'https://practicesoftwaretesting.com/', { timeout: 10000 }),
    page.locator('.card:not(.skeleton)').first().click(),
  ]);

  await page.waitForLoadState('networkidle');
  const favoriteBtn = page.locator('[data-test="add-to-favorites"]');
  await expect(favoriteBtn).toBeVisible({ timeout: 10000 });

  await Promise.all([
    page.waitForResponse(
      res => res.url().includes('/favorites') && [200, 201, 409].includes(res.status()),
      { timeout: 10000 }
    ),
    favoriteBtn.click(),
  ]);
  await page.goto('/account/favorites');
  await page.waitForLoadState('networkidle');

  await expect(page.locator('[data-test="page-title"]')).toHaveText('Favorites', { timeout: 10000 });
  await expect(page.locator('[data-test^="favorite-"]').first()).toBeVisible({ timeout: 10000 });
  await expect(page.locator('[data-test="product-name"]').first()).toBeVisible({ timeout: 10000 });
});