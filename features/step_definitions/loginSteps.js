require('dotenv').config();
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/loginPage');

Given('I am on the login page', async function() {
    this.loginPage = new LoginPage(this.driver);
    await this.loginPage.open();
});

When('I enter a valid username and password', async function() {
    await this.loginPage.enterUsername(process.env.USER_NAME);
    await this.loginPage.enterPassword(process.env.PASSWORD);
});

When('I click on the login button', async function() {
    await this.loginPage.clickLoginButton();
});

Then('I should be in home page', async function() {
    await this.loginPage.verifySuccessfulLogin();
});
