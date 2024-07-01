const { By, until } = require("selenium-webdriver");
const assert = require("assert");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com/");
  }

  async enterUsername(username) {
    await this.driver.findElement(By.id("user-name")).sendKeys(username);
  }

  async enterPassword(password) {
    await this.driver.findElement(By.id("password")).sendKeys(password);
  }

  async clickLoginButton() {
    await this.driver.findElement(By.id("login-button")).click();
  }

  async verifySuccessfulLogin() {
    await this.driver.wait(
      until.urlIs("https://www.saucedemo.com/inventory.html"),
      10000
    ); // Wait up to 10 seconds for the URL to be the expected one
    const currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(
      currentUrl,
      "https://www.saucedemo.com/inventory.html",
      "URL should be the inventory page"
    );
  }
}

module.exports = LoginPage;
