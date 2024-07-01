const { By, until } = require('selenium-webdriver');
const assert = require('assert');

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;
    }

    async addToCart() {
        await this.driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
    }

    async clickCartButton() {
        await this.driver.findElement(By.id('shopping_cart_container')).click();
    }

    async clickCheckoutButton() {
        await this.driver.findElement(By.id('checkout')).click();
    }

    async enterFirstName(firstName) {
        await this.driver.findElement(By.id('first-name')).sendKeys(firstName);
    }

    async enterLastName(lastName) {
        await this.driver.findElement(By.id('last-name')).sendKeys(lastName);
    }

    async enterPostalCode(postalCode) {
        await this.driver.findElement(By.id('postal-code')).sendKeys(postalCode);
    }

    async clickContinueButton() {
        await this.driver.findElement(By.id('continue')).click();
    }

    async clickFinishButton() {
        await this.driver.findElement(By.id('finish')).click();
    }

    async checkoutComplete() {
        await this.driver.wait(until.urlIs('https://www.saucedemo.com/checkout-complete.html'), 10000); // Wait up to 10 seconds for the URL to be the expected one
        const currentUrl = await this.driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://www.saucedemo.com/checkout-complete.html', 'URL should be the checkout complete page');
    }
}

module.exports = CheckoutPage;
