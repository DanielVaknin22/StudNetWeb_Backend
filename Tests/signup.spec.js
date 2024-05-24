import { Builder, By, Key, until } from 'selenium-webdriver';
import assert from 'assert';

async function signUpTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the signup page
        await driver.get('http://localhost:3000/');
        await driver.findElement(By.id('signupButton')).click();
        // Fill the form fields
        await driver.findElement(By.id('email')).sendKeys('testuser123456@example.com');
        await driver.findElement(By.id('password')).sendKeys('Password123');
        await driver.findElement(By.id('userName')).sendKeys('testuser123456');
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
