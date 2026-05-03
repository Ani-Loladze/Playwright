import { test, expect } from '@playwright/test';

test('User sees Product Details page', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.locator('a.card').first().click();
  await expect(page).toHaveURL(/product/);
  await expect(page.locator('h1')).toBeVisible();
});