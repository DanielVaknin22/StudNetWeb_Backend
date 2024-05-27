import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

(async function deleteUser() {
    let driver;
    
    try {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000/');
        const title = await driver.getTitle();
        assert.equal(title, 'StudNet - Social Network');
    
        // login and check if the user is redirected to the home page
        await driver.findElement(By.css('input[type="email"]')).sendKeys('a@z.com');
        await driver.findElement(By.css('input[type="password"]')).sendKeys('Maor1122334455');
    await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

    await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.equal(currentUrl, 'http://localhost:3000/#/home');

    // Getting to editing a profile through the navBar
    await driver.get('http://localhost:3000/#/profile');
    await driver.findElement(By.css('button.sc-bSkxYT.dWSFze')).click();

    // Editing the profile
    await driver.findElement(By.css('button.accountButton')).click();
    await driver.findElement(By.css('button.DeleteMyAccount')).click();

      
    console.log('Test passed!');
  } catch (e) {
    console.error('Test failed:', e);
  } finally {
    await driver.quit();
  }
}());