import { test, expect } from '@playwright/test';

test('User adds item to basket', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('.card.skeleton', { state: 'detached', timeout: 10000 });
  await page.waitForSelector('.card:not(.skeleton)', { timeout: 10000 });

  await Promise.all([
    page.waitForURL(url => url.href !== 'https://practicesoftwaretesting.com/', { timeout: 10000 }),
    page.locator('.card:not(.skeleton)').first().click(),
  ]);

  console.log('Navigated to:', page.url());
  await page.waitForLoadState('networkidle');
  const addToCartBtn = page.locator('[data-test="add-to-cart"]');
  await expect(addToCartBtn).toBeVisible({ timeout: 10000 });
  await addToCartBtn.click();

  await page.waitForResponse(
    res => res.url().includes('/carts') && res.status() === 200,
    { timeout: 10000 }
  );
  await page.goto('/checkout');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('table')).toBeVisible({ timeout: 10000 });
});