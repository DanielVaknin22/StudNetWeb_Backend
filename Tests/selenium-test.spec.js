/* eslint-disable no-console */
import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

(async function teststudnet() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle();
    assert.equal(title, 'StudNet - Social Network');

    await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
    await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

    await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.equal(currentUrl, 'http://localhost:3000/#/home');
    await driver.findElement(By.css('input.sc-dnwKUv.cCgyge')).sendKeys('Hello, World! from Selenium');
    await driver.findElement(By.css('button.sc-kgKVFY.fEkNUb')).click();
    await driver.wait(until.elementLocated(By.css('div.sc-fmSAUk.fmdfzI')), 10000);
    const post = await driver.findElement(By.css('div.sc-fmSAUk.fmdfzI')).;
    assert.equal(post, 'Hello, World! from Selenium');
    

    console.log('Test passed!');
  } catch (e) {
    console.error('Test failed:', e);
  } finally {
    await driver.quit();
  }
}());
