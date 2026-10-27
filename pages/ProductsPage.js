export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    }

    async addProductToCart(productId) {
        await this.page.locator(`#add-to-cart-${productId}`).click();
    }
    
    async openCart() {
        await this.cartLink.click();
    }
}