//practice
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
});
