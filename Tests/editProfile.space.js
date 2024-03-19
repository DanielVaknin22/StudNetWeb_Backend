import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

(async function teststudnet() {
    let driver;
  
    try {
      driver = await new Builder().forBrowser('chrome').build();
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
  
      // Getting to editing a profile through the navBar
      await driver.get('http://localhost:3000/#/profile');
    //   await driver.findElement(By.css('a.sc-iAEyYk.eNucbM')).click();
      await driver.sleep(10000)
      await driver.findElement(By.css('button.sc-bSkxYT.dWSFze')).click();
      
    //   await driver.sleep(9000); // Wait for 2 seconds
    //   const post = await driver.findElement(By.css('h3.sc-fbJfA.sc-fGFwAa.eQTEMi.EdAWX'));
    //   const text = await post.getText();
    //   assert.equal(text, 'Hello, World! from Selenium'); // Assert the text content of the post
  
      console.log('Test passed!');
    } catch (e) {
      console.error('Test failed:', e);
    } finally {
      await driver.quit();
    }
  }());