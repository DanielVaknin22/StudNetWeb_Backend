import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';

let driver;

describe('Login Functionality Tests', function () {
    this.timeout(30000); // Extend timeout for asynchronous operations

    before(async () => {
        // Ensure 'chromedriver' is correctly set up in the path
        await import('chromedriver');

        // Initialize the WebDriver with Chrome in headless mode
        const options = new chrome.Options();
        options.addArguments('--headless'); // Correct way to enable headless mode
        driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();

        // driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    after(async () => {
        if (driver) {
            await driver.quit();
        }
    });

    it('Successful login redirects to home', async function () {
        await driver.get('http://localhost:3000/');
        await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
        await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
        await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

        await driver.wait(until.urlIs('http://localhost:3000/home'), 10000);
        const currentUrl = await driver.getCurrentUrl();
        
        expect(currentUrl).to.equal('http://localhost:3000/#/home');
    });
});
