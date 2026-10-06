import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('[data-test="product-sort-container"]').selectOption('Price (low to high)');
await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
await expect(page.locator('.inventory_item_price').last()).toHaveText('$49.99');
});