import { test, expect } from '@playwright/test';

test('added product appears in cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByPlaceholder('Password').press('Enter');
    await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    await page.locator('a[aria-label="Cart, 3 items"]').click();
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('.inventory_item_name').nth(1)).toHaveText('Sauce Labs Bike Light');
    await expect(page.locator('.inventory_item_name').last()).toHaveText('Sauce Labs Bolt T-Shirt');
});     