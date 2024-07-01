require('dotenv').config();
const { Before } = require('@cucumber/cucumber');
const LoginPage = require('../pages/loginPage');
const CheckoutPage = require('../pages/checkoutPage');

Before({ tags: '@checkout' }, async function() {
    this.loginPage = new LoginPage(this.driver);
    this.checkoutPage = new CheckoutPage(this.driver);
    await this.loginPage.open();
    await this.loginPage.enterUsername(process.env.USER_NAME);
    await this.loginPage.enterPassword(process.env.PASSWORD);
    await this.loginPage.clickLoginButton();
    await this.loginPage.verifySuccessfulLogin();
});
