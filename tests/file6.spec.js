import { test, expect } from '@playwright/test';


    test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    });
    test('test1', async ({ page }) => {
    await expect(page.locator('#flash')).toBeVisible();
await expect(page.locator('#flash')).toContainText('You logged into a secure area');
});
test('test2', async ({ page }) => {
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
});