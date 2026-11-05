import { test, expect } from '../fixtures/pages';

test('product added by a logged-in user appears in the cart', async ({ loggedInProductsPage, cartPage }) => {
  await loggedInProductsPage.addProductToCart('sauce-labs-backpack');
  await expect(loggedInProductsPage.cartBadge).toHaveText('1');
  await loggedInProductsPage.openCart();
  await expect(cartPage.cartItems).toHaveCount(1);
});