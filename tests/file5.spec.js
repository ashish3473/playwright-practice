import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  await page.click('#start button');
  await expect(page.locator('#finish')).toBeVisible({ timeout: 10000 });
});