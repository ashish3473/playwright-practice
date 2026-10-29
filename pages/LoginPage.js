export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.errorMessage = page.locator('[data-test="error"]');  
    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com');
  }

  async login(username, password) { 
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.passwordInput.press('Enter');
  }
}