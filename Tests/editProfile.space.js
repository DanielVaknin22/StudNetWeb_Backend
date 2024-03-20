import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

(async function editProfile() {
  let driver;

  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle();
    assert.equal(title, 'StudNet - Social Network');

    // login and check if the user is redirected to the home page
    await driver.findElement(By.css('input[type="email"]')).sendKeys('maorhadad94@gmail.com');
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
    await driver.findElement(By.css('input[name="userName"]')).clear();
    await driver.findElement(By.css('input[name="userName"]')).sendKeys('BarGg');
    await driver.findElement(By.css('input[name="firstName"]')).clear();
    await driver.findElement(By.css('input[name="firstName"]')).sendKeys('Bar');
    await driver.findElement(By.css('input[name="lastName"]')).clear();
    await driver.findElement(By.css('input[name="lastName"]')).sendKeys('Cohen');
    await driver.findElement(By.css('button.accountButton')).click();
    // await driver.sleep(5000)

    // Editing the password
    // Click on the "Password" tab
    await driver.findElement(By.css('.react-tabs__tab-list > .react-tabs__tab:nth-child(2)')).click();
    await driver.sleep(1000);
    await driver.findElement(By.css('input[placeholder="Current Password"]')).sendKeys('Maor123456789');
    await driver.findElement(By.css('input[placeholder="New Password"]')).sendKeys('Maor1122334455');
    await driver.findElement(By.css('input[placeholder="Re-enter New Password"]')).sendKeys('Maor1122334455');
    await driver.findElement(By.css('button.saveButton')).click();

    // edit personal details
    await driver.findElement(By.css('.react-tabs__tab-list > .react-tabs__tab:nth-child(3)')).click();
    await driver.findElement(By.css('button.accountButton')).click();
    await driver.sleep(1000);
    await driver.findElement(By.css('input[name="country"]')).sendKeys('Israel');
    await driver.findElement(By.css('input[name="studySubject"]')).sendKeys('Software Engineering');
    await driver.findElement(By.id('mui-component-select-schoolYear')).click();
    // Wait for a short duration to ensure the options are visible
    await driver.sleep(500);
    // Find the option corresponding to "Fourth year" and click on it
    await driver.findElement(By.xpath('//div[name="Fourth year"]')).click();


    await driver.findElement(By.css('input[name="aboutMySelf"]')).sendKeys('I am a software engineering student at SCE');
    await driver.findElement(By.css('input[name="phoneNumber"]')).sendKeys('0503698456');
    await driver.sleep(1000);
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