import { test, expect } from '../fixtures/pages';

test('added products appear in cart', async ({ loginPage, productsPage, cartPage }) => {

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
