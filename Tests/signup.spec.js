import { Builder, By, Key, until } from 'selenium-webdriver';
import assert from 'assert';

async function signUpTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the signup page
        await driver.get('http://localhost:3000/');
        await driver.findElement(By.id('signupButton')).click();
        // Fill the form fields
        await driver.findElement(By.name('email')).sendKeys('testuser@example.com');
        await driver.findElement(By.name('password')).sendKeys('password123');
        await driver.findElement(By.name('userName')).sendKeys('testuser');
        await driver.findElement(By.name('firstName')).sendKeys('Test');
        await driver.findElement(By.name('lastName')).sendKeys('User', Key.RETURN);
        await driver.findElement(By.id('signupComplete')).click();

        // Click the signup button (assuming the button has a specific class or ID for easy selection)
        

        // Wait for the redirection or message display and verify
        // Assuming the success criterion is redirection to '/login', adjust as necessary
        await driver.wait(until.urlIs('http://localhost:3000/login'), 10000);
        const currentUrl = await driver.getCurrentUrl();
        console.log("location : "+currentUrl);
        assert.equal(currentUrl, 'http://localhost:3000/login', 'The user was not redirected to the login page after signup');

        console.log('Signup test passed successfully!');
    } catch (error) {
        console.error('Signup test failed:', error);
    } finally {
        await driver.quit();
    }
}

signUpTest();
