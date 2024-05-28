import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import assert from 'assert';

(async function editProfile() {
  let driver;
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--disable-gpu');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--window-size=1920,1080');  // Set window size

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
  try {
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
    await driver.get('http://localhost:3000/#/home');
    // await driver.wait(until.elementIsVisible(driver.findElement(By.css('button.sc-bSkxYT.dWSFze'))), 10000);
    // await driver.executeScript('arguments[0].scrollIntoView(true);', driver.findElement(By.css('button.sc-bSkxYT.dWSFze')));
    await driver.findElement(By.xpath('//*[@id="root"]/nav/div/div[1]/div/a[2]')).click();
    


    // Editing the profile
    await driver.findElement(By.xpath('//*[@id="root"]/div/div/table/td[1]/h1/button')).click();
    let edithButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="panel:r1:0"]/div/div/form/p[4]/button')), 10000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", edithButton);
    await driver.wait(until.elementIsVisible(edithButton), 10000);
    await driver.wait(until.elementIsEnabled(edithButton), 10000);

    // Click the search button
    await edithButton.click();

    // await driver.findElement(By.xpath('//*[@id="panel:r7:0"]/div/div/form/p[4]/button')).click();//second //*[@id="root"]/div/div/table/td[1]/h1/button

    await driver.wait(until.elementIsVisible(driver.findElement(By.css('input[name="userName"]'))), 10000);
    await driver.findElement(By.css('input[name="userName"]')).clear();
    await driver.findElement(By.css('input[name="userName"]')).sendKeys('BarGg');
    await driver.findElement(By.css('input[name="firstName"]')).clear();
    await driver.findElement(By.css('input[name="firstName"]')).sendKeys('Bar');
    await driver.findElement(By.css('input[name="lastName"]')).clear();
    await driver.findElement(By.css('input[name="lastName"]')).sendKeys('Cohen');
    await driver.findElement(By.css('button.accountButton')).click();

    // Editing the password
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
    await driver.sleep(500);
    await driver.findElement(By.xpath('//li[text()="Fourth year"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.id(':r3:')).sendKeys('I am a software engineering student at SCE');
    await driver.sleep(1000);
    await driver.findElement(By.css('input[name="phoneNumber"]')).sendKeys('0503698456');
    await driver.sleep(1000);
    await driver.findElement(By.css('button.accountButton')).click();
    await driver.sleep(2000);

    await driver.get('http://localhost:3000/#/my-area');
    const currentUrl2 = await driver.getCurrentUrl();
    console.log(currentUrl2);

    // Click on the "Followers" tab using XPath  //*[@id="tab:r1:3"]
    const followersTab = await driver.findElement(By.xpath('//li[@id="tab:r1:3"]'));
    await driver.executeScript("arguments[0].click();", followersTab);

     await driver.sleep(1000);
     //Following   //*[@id="tab:r5:4"]
     const followersTab2 = await driver.findElement(By.xpath('//li[@id="tab:r1:4"]'));
    await driver.executeScript("arguments[0].click();", followersTab2);

     await driver.sleep(1000);
     //Posts Liked   //*[@id="tab:r5:5"]
     const followersTab3 = await driver.findElement(By.xpath('//li[@id="tab:r1:5"]'));
    await driver.executeScript("arguments[0].click();", followersTab3);
     await driver.sleep(1000);
     //Post Saved     //*[@id="tab:r5:6"]
     const followersTab4 = await driver.findElement(By.xpath('//li[@id="tab:r1:6"]'));
    await driver.executeScript("arguments[0].click();", followersTab4);
     await driver.sleep(1000);
     //Statistics   //*[@id="tab:r5:7"]
     const followersTab5 = await driver.findElement(By.xpath('//li[@id="tab:r1:7"]'));
    await driver.executeScript("arguments[0].click();", followersTab5);
     await driver.sleep(1000);

    console.log('Edit profile Test passed!');
  } catch (e) {
    console.error('Edit profile Test failed:', e);
  } finally {
    await driver.quit();
  }
}());
