import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import assert from 'assert';

(async function deleteUser() {
    let driver;
    
    try {
        driver = await new Builder().forBrowser('chrome').build();
      // driver = await new Builder().forBrowser('crome').usingServer('http://192.168.1.126:4444/wd/hub').build();

        await driver.get('http://localhost:3000/');
        const title = await driver.getTitle();
        assert.equal(title, 'StudNet - Social Network');

        // Registration process
        await driver.findElement(By.id('signupButton')).click();

        await driver.findElement(By.id('email')).sendKeys('a@z.com');
        await driver.findElement(By.id('password')).sendKeys('Maor1122334455');
        await driver.findElement(By.id('userName')).sendKeys('TestUser');
        await driver.findElement(By.id('firstName')).sendKeys('Test');
        await driver.findElement(By.id('lastName')).sendKeys('User');
        await driver.findElement(By.id('signupComplete')).click();

        // Wait for the alert and verify
        await driver.wait(until.alertIsPresent(), 10000);
        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        assert.equal(alertText, 'Hello Test, You are now registered!', 'Alert message is incorrect');
        await alert.accept();

        // Navigate back to the login page
        await driver.wait(until.elementLocated(By.css('input[type="email"]')), 10000);
        
        // Perform login
        await driver.findElement(By.css('input[type="email"]')).sendKeys('a@z.com');
        await driver.findElement(By.css('input[type="password"]')).sendKeys('Maor1122334455');
        await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

        await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
        const currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, 'http://localhost:3000/#/home');

        // Navigate to the profile page
        await driver.get('http://localhost:3000/#/profile');
        await driver.findElement(By.css('button.sc-bSkxYT.dWSFze')).click();

        // Editing the profile
        await driver.findElement(By.css('button.accountButton')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="panel:r1:0"]/div/div/form/button')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/div[2]/button[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="panel:r1:0"]/div/div/form/button')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/div[2]/button[2]')).click();

        console.log('Test passed Delete User!');
    } catch (e) {
        console.error('Test failed:Delet User', e);
    } finally {
        await driver.quit();
    }
}());
