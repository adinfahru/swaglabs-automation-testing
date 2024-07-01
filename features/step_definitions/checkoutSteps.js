const { Given, When, Then } = require('@cucumber/cucumber');
const CheckoutPage = require('../pages/checkoutPage');

Given('I am on the home page', async function() {
    // Assuming that the user is already logged in by the Before hook
});

When('I click add to cart from product', async function() {
    await this.checkoutPage.addToCart();
});

When('I click on cart menu', async function() {
    await this.checkoutPage.clickCartButton();
});

When('I click checkout button', async function() {
    await this.checkoutPage.clickCheckoutButton();
});

When('I fill the information', async function() {
    await this.checkoutPage.enterFirstName(process.env.FIRST_NAME);
    await this.checkoutPage.enterLastName(process.env.LAST_NAME);
    await this.checkoutPage.enterPostalCode(process.env.POSTAL_CODE);
});

When('I click continue button', async function() {
    await this.checkoutPage.clickContinueButton();
});

When('I click finish button', async function() {
    await this.checkoutPage.clickFinishButton();
});

Then('I should see Thank you for your order!', async function() {
    await this.checkoutPage.checkoutComplete();
});
