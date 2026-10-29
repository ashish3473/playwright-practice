import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('invalid login shows an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_pass');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});