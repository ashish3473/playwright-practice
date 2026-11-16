export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('[data-test="inventory-item-name"]');
    }
    async getItemNames() {
        return await this.cartItems.allTextContents();
    }
}