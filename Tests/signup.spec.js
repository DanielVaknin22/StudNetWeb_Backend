/* eslint-disable no-console */
import {
    Builder, By, until, Capabilities, Key
  } from 'selenium-webdriver';
  import assert from 'assert';
  import chrome from 'selenium-webdriver/chrome.js';
  import { randomInt } from 'crypto';
  
  const browsers = [
    { browserName: 'chrome', platform: 'MAC' },
    { browserName: 'safari', platform: 'MAC' },
  ];
  
  async function signUpTest(browserConfig) {
    let driver;
    try {
      if (browserConfig.browserName === 'chrome') {
        const options = new chrome.Options();
        options.addArguments('--headless');
        options.addArguments('--disable-gpu');
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
  
        driver = await new Builder()
          .forBrowser('chrome')
          .setChromeOptions(options)
          .usingServer('http://localhost:4444/wd/hub')
          .build();
      } else {
        driver = await new Builder()
          .usingServer('http://localhost:4444/wd/hub')
          .withCapabilities(Capabilities[browserConfig.browserName]())
          .build();
      }
  
      // Return to the login/signup
      await driver.get('http://localhost:3000/');
      const title2 = await driver.getTitle();
      assert.equal(title2, 'StudNet - Social Network');
      
      // Login page
      await driver.findElement(By.id('signupButton')).click();
  
      // Fill the form fields
      let user = "testuser" + randomInt(1000000).toString();
  
      await driver.findElement(By.id('email')).sendKeys(user + '@example.com');
      await driver.findElement(By.id('password')).sendKeys('Password123');
      await driver.findElement(By.id('userName')).sendKeys(user);
      await driver.findElement(By.id('firstName')).sendKeys('Test');
      await driver.findElement(By.id('lastName')).sendKeys('User', Key.RETURN);
      await driver.findElement(By.id('signupComplete')).click();
  
      // Wait for the alert and verify
      await driver.wait(until.alertIsPresent(), 10000);
      const alert = await driver.switchTo().alert();
      const alertText = await alert.getText();
  
      // Assert that the alert message equals the expected value
      assert.equal(alertText, 'Hello Test, You are now registered!', 'Alert message is incorrect');
  
      console.log(`Signup test passed successfully for ${browserConfig.browserName}!`);
    } catch (error) {
      console.error(`Signup test failed for ${browserConfig.browserName}:`, error);
    } finally {
      if (driver) {
        await driver.quit();
      }
    }
  }
  
  (async function runAllTests() {
    await Promise.all(browsers.map(signUpTest));
  })();
  