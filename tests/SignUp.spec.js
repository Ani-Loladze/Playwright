import {test, expect} from "@playwright/test";

test("Go to Sign Up page", async ({page})=>{
  await page.goto('https://practicesoftwaretesting.com/auth/register');
   const uniqueEmail = `test${Date.now()}@mail.com`;

  await page.goto('https://practicesoftwaretesting.com/auth/register');
  await page.locator('[data-test="first-name"]').click();
  await page.locator('[data-test="first-name"]').fill('John');
  await page.locator('[data-test="last-name"]').click();
  await page.locator('[data-test="last-name"]').fill('Doe');
  await page.locator('[data-test="dob"]').click();
  await page.locator('[data-test="dob"]').fill('2000-01-01');
  await page.locator('[data-test="country"]').selectOption('BE');
  await page.locator('[data-test="postal_code"]').click();
  await page.locator('[data-test="postal_code"]').fill('0111');
  await page.locator('[data-test="house_number"]').click();
  await page.locator('[data-test="house_number"]').fill('42');
  await page.locator('[data-test="phone"]').click();
  await page.locator('[data-test="phone"]').fill('555555555');
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('email@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('Password111$#@');
  await page.locator('[data-test="register-submit"]').click();

  // Then user is redirected (usually to login/profile)
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/register');

});