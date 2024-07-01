require('dotenv').config();
const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
require('chromedriver');

class CustomWorld {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
        setDefaultTimeout(60000);  // 60 seconds timeout
    }

    async close() {
        await this.driver.quit();
    }
}

setWorldConstructor(CustomWorld);
