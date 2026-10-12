await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.locator('[data-test="product-sort-container"]').selectOption('Price (low to high)');
this is how we can sort the items
