/* eslint-disable no-console */
// import { Builder, By, until } from 'selenium-webdriver';
// import assert from 'assert';

// (async function login() {
//   let driver;
//   try {
//     driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/');
//     const title = await driver.getTitle();
//     assert.equal(title, 'StudNet - Social Network');

//     // forgot password with invalid email
//     await driver.findElement(By.xpath('//*[@id="root"]/div/div/label[3]/a')).click();

//     await driver.wait(until.urlIs('http://localhost:3000/#/login/:fpass'), 10000);
//     const currentUrl1 = await driver.getCurrentUrl();
//     assert.equal(currentUrl1, 'http://localhost:3000/#/login/:fpass');

//     await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input')).sendKeys('raphaeffffl2gb@gmail.com');
//     await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click();
//     await driver.sleep(1000);
//     const valid = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/h3')).getText();
//     assert.equal(valid, 'Invalid email!');

//     console.log('forgot password invalid email Test passed!');

//     // forgot password with valid email
//     await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input')).clear();
//     await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input')).sendKeys('raphael2gb@gmail.com');
//     await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click();
//     await driver.sleep(1000);
//     const valid2 = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/h3')).getText();
//     assert.equal(valid2, 'A password recovery email has been successfully sent!');
//     console.log('forgot password valid email Test passed!');
//     await driver.get('http://localhost:3000/#/login');

//     // check the redirection to the register page
//     await driver.findElement(By.xpath('//*[@id="root"]/div/div/label[4]/a')).click();
//     await driver.wait(until.urlIs('http://localhost:3000/#/signUp'), 10000);
//     const currentUrl2 = await driver.getCurrentUrl();
//     assert.equal(currentUrl2, 'http://localhost:3000/#/signUp');
//     console.log('redirect to register page Test passed!');
//     await driver.get('http://localhost:3000/#/login');

//     await driver.sleep(1000);

//     // login and check if the user is redirected to the home page
//     await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
//     await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
//     await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

//     await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
//     const currentUrl = await driver.getCurrentUrl();
//     assert.equal(currentUrl, 'http://localhost:3000/#/home');

//     console.log('login Test passed!');
//   } catch (e) {
//     console.error('login Test failed:', e);
//   } finally {
//     await driver.quit();
//   }
// }());

/* eslint-disable no-console */
import {
  Builder, By, until, Capabilities,
} from 'selenium-webdriver';
import assert from 'assert';

const browsers = [
  { browserName: 'chrome', platform: 'WINDOWS' },
  { browserName: 'MicrosoftEdge', platform: 'WINDOWS' },
  { browserName: 'safari', platform: 'MAC' },
];

async function runTest(browserConfig) {
  let driver;
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle();
    assert.equal(title, 'StudNet - Social Network');

    // forgot password with invalid email
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/label[3]/a')).click();
    await driver.wait(until.urlIs('http://localhost:3000/#/login/:fpass'), 10000);
    const currentUrl1 = await driver.getCurrentUrl();
    assert.equal(currentUrl1, 'http://localhost:3000/#/login/:fpass');

    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input')).sendKeys('raphaeffffl2gb@gmail.com');
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click();
    await driver.sleep(1000);
    const valid = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/h3')).getText();
    assert.equal(valid, 'Invalid email!');
    console.log('forgot password invalid email Test passed!');

    // forgot password with valid email
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/input')).sendKeys('maorhadad94@gmail.com');
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div/button')).click();
    await driver.sleep(1000);
    const valid2 = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/h3')).getText();
    assert.equal(valid2, 'A password recovery email has been successfully sent!');
    console.log('forgot password valid email Test passed!');
    await driver.get('http://localhost:3000/#/login');

    // check the redirection to the register page
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/label[4]/a')).click();
    await driver.wait(until.urlIs('http://localhost:3000/#/signUp'), 10000);
    const currentUrl2 = await driver.getCurrentUrl();
    assert.equal(currentUrl2, 'http://localhost:3000/#/signUp');
    console.log('redirect to register page Test passed!');
    await driver.get('http://localhost:3000/#/login');

    await driver.sleep(1000);

    // login and check if the user is redirected to the home page
    await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
    await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

    await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.equal(currentUrl, 'http://localhost:3000/#/home'); ///
    console.log('login Test passed!');
  } catch (e) {
    console.error(`login Test failed for ${browserConfig.browserName}:`, e);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

(async function runAllTests() {
  await Promise.all(browsers.map(runTest));
}());