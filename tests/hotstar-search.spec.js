import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hotstar.com/in/home');
  await page.getByRole('tab', { name: 'Home' }).getByRole('button').click();  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Movies, shows and more' }).click();
  await page.getByRole('textbox', { name: 'Movies, shows and more' }).fill('biggboss kannada');
  await page.getByRole('textbox', { name: 'Movies, shows and more' }).press('Enter');
  await page.getByTestId('search-hero-primarycta').getByRole('button', { name: 'Latest Episode' }).click();
});