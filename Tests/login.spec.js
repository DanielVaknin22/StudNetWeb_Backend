/* eslint-disable no-console */
import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

import assert from 'assert';

(async function login() {
  let driver;

  try {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
  
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle();
    assert.equal(title, 'StudNet - Social Network');

    // login and check if the user is redirected to the home page
    await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
    await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

    await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.equal(currentUrl, 'http://localhost:3000/#/home');

    console.log('login Test passed!');
  } catch (e) {
    console.error('login Test failed:', e);
  } finally {
    await driver.quit();
  }
}());
