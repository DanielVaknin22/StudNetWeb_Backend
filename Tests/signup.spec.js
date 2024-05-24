import { Builder, By, Key, until } from 'selenium-webdriver';
import assert from 'assert';
import chrome from 'selenium-webdriver/chrome.js';

import { randomInt } from 'crypto';

async function signUpTest() {
    let driver;
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
  
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
    try {
        // Navigate to the signup page
        // await driver.get('http://localhost:3000/');
        // const title = await driver.getTitle();
        // assert.equal(title, 'StudNet - Social Network');

        // // login and check if the user is redirected to the home page
        // await driver.findElement(By.css('input[type="email"]')).sendKeys('testuser123456@example.com');
        // await driver.findElement(By.css('input[type="password"]')).sendKeys('Password123');
        // await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

        // await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
        // const currentUrl = await driver.getCurrentUrl();
        // assert.equal(currentUrl, 'http://localhost:3000/#/home');



        // // get in to the profile and delete the user

        // const profileButtonXPath = '//*[@id="root"]/nav/div/div[1]/div/a[2]';
        // let profileButton = await driver.wait(until.elementLocated(By.xpath(profileButtonXPath)), 10000);
        // await profileButton.click();

        // // personal area bottun
        // const personaleButtonXPath = '//*[@id="root"]/div/div/table/td[1]/h1/button';
        // let personalButton = await driver.wait(until.elementLocated(By.xpath(personaleButtonXPath)), 10000);
        // await personalButton.click();

        // const deleteInputXPath = '//*[@id="panel:r1:0"]/div/div/form/button'; // Adjust if necessary
        // let deletehInput = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath(deleteInputXPath))), 10000);
        // await deletehInput.click();


        
        // const delete2InputXPath = '/html/body/div[2]/div[3]/div/div[2]/button[2]'; // Adjust if necessary
        // let delete2Input = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath(delete2InputXPath))), 10000);
        // await delete2Input.click();


        //return to the login/signup
        await driver.get('http://localhost:3000/');
        const title2 = await driver.getTitle();
        assert.equal(title2, 'StudNet - Social Network');
        // login page
        await driver.findElement(By.id('signupButton')).click();

        // Fill the form fields
        let user = "testuser"+ randomInt(1000000).toString();

        await driver.findElement(By.id('email')).sendKeys(user+'@example.com');
        await driver.findElement(By.id('password')).sendKeys('Password123');
        await driver.findElement(By.id('userName')).sendKeys(user);
        await driver.findElement(By.id('firstName')).sendKeys('Test');
        await driver.findElement(By.id('lastName')).sendKeys('User', Key.RETURN);
        await driver.findElement(By.id('signupComplete')).click();

        // Click the signup button (assuming the button has a specific class or ID for easy selection)


        // Wait for the redirection or message display and verify
        // Assuming the success criterion is redirection to '/login', adjust as necessary

        await driver.wait(until.alertIsPresent(), 10000);
        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();

        // Assert that the alert message equals the expected value
        assert.equal(alertText, 'Hello Test, You are now registered!', 'Alert message is incorrect');

        console.log('Signup test passed successfully!');
    } catch (error) {
        console.error('Signup test failed:', error);
    } finally {
        await driver.quit();
    }
}




signUpTest();
