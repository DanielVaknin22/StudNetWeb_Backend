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
      await driver.findElement(By.css('input[type="email"]')).sendKeys('maorhadad94@gmail.com');
      await driver.findElement(By.css('input[type="password"]')).sendKeys('Maor123456789');
      await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();
  
      await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
      const currentUrl = await driver.getCurrentUrl();
      assert.equal(currentUrl, 'http://localhost:3000/#/home');
  
      // Getting to editing a profile through the navBar
      await driver.get('http://localhost:3000/#/profile');
      await driver.findElement(By.css('button.sc-bSkxYT.dWSFze')).click();
      
      // Editing the profile
      await driver.findElement(By.css('button.accountButton')).click();
      await driver.findElement(By.css('input[name="userName"]')).clear();
      await driver.findElement(By.css('input[name="userName"]')).sendKeys('BarGg');
      await driver.findElement(By.css('input[name="firstName"]')).clear();
      await driver.findElement(By.css('input[name="firstName"]')).sendKeys('Bar');
      await driver.findElement(By.css('input[name="lastName"]')).clear();
      await driver.findElement(By.css('input[name="lastName"]')).sendKeys('Cohen');
      await driver.findElement(By.css('button.accountButton')).click();
      await driver.sleep(5000)
      
      // Editing the password
      await driver.findElement(By.css('react-tabs__tab-list')).click();
      await driver.findElement(By.css('button.Password')).click();
      await driver.sleep(5000);
      await driver.findElement(By.css('input[name="currentPassword"]')).sendKeys('Maor123456789');
      await driver.findElement(By.css('input[name="newPassword"]')).sendKeys('Maor1122334455');
      await driver.findElement(By.css('input[name="confirmPassword"]')).sendKeys('Maor1122334455');
      await driver.findElement(By.css('button.saveButton')).click();

      
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