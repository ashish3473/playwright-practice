//practice
import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').nth(1).check();
  await expect(page.getByRole('checkbox').first()).toBeChecked();
  await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
  
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');


  await page.goto('https://the-internet.herokuapp.com/hovers');
  await page.getByRole('img', { name: 'User Avatar' }).first().hover();
  await expect(page.getByRole('heading', { name: 'name: user1' })).toBeVisible();
 });