import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import {CartPage} from '../pages/CartPage';

test('added products appear in cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.addProductToCart('sauce-labs-bike-light');
    await productsPage.addProductToCart('sauce-labs-bolt-t-shirt');

    await expect(productsPage.cartBadge).toHaveText('3');
    await productsPage.openCart();
    await expect(cartPage.cartItems).toHaveCount(3);

    const itemNames = await cartPage.getItemNames();
    expect(itemNames).toEqual(['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']);
});