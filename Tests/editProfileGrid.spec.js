import { Builder, By, until, Capabilities } from 'selenium-webdriver';
import assert from 'assert';

// Define the different browser configurations
const browsers = [
  { browserName: 'chrome', platform: 'WINDOWS' },
//   { browserName: 'firefox', platform: 'WINDOWS' },
  { browserName: 'MicrosoftEdge', platform: 'WINDOWS' }
];

async function runTest(browserConfig) {
  let driver;

  try {
    // Initialize the WebDriver with the specified browser and platform
    driver = await new Builder()
      .usingServer('http://192.168.1.126:4444/wd/hub')
      .withCapabilities(Capabilities[browserConfig.browserName]())
      .build();

    // Navigate to the login page
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'StudNet - Social Network');

    // Perform login
    await driver.findElement(By.css('input[type="email"]')).sendKeys('maorhadad94@gmail.com');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('Maor1122334455');
    await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

    // Wait until redirected to home page
    await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://localhost:3000/#/home');

    // Navigate to profile page
    await driver.get('http://localhost:3000/#/profile');
    await driver.findElement(By.css('button.sc-bSkxYT.dWSFze')).click();

    // Edit profile information
    await driver.findElement(By.css('button.accountButton')).click();
    await driver.findElement(By.css('input[name="userName"]')).clear();
    await driver.findElement(By.css('input[name="userName"]')).sendKeys('BarGg');
    await driver.findElement(By.css('input[name="firstName"]')).clear();
    await driver.findElement(By.css('input[name="firstName"]')).sendKeys('Bar');
    await driver.findElement(By.css('input[name="lastName"]')).clear();
    await driver.findElement(By.css('input[name="lastName"]')).sendKeys('Cohen');
    await driver.findElement(By.css('button.accountButton')).click();
    await driver.sleep(2000);  // Wait to ensure the changes are saved

    // Edit password
    await driver.findElement(By.css('.react-tabs__tab-list > .react-tabs__tab:nth-child(2)')).click();
    await driver.sleep(1000);
    await driver.findElement(By.css('input[placeholder="Current Password"]')).sendKeys('Maor123456789');
    await driver.findElement(By.css('input[placeholder="New Password"]')).sendKeys('Maor1122334455');
    await driver.findElement(By.css('input[placeholder="Re-enter New Password"]')).sendKeys('Maor1122334455');
    await driver.findElement(By.css('button.saveButton')).click();
    await driver.sleep(2000);  // Wait to ensure the password changes are saved

    // Edit personal details
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
    await driver.sleep(2000);  // Wait to ensure personal details are saved

    // Navigate through various profile tabs
    const tabs = [
      '.react-tabs__tab-list > .react-tabs__tab:nth-child(4)',
      '.react-tabs__tab-list > .react-tabs__tab:nth-child(5)',
      '.react-tabs__tab-list > .react-tabs__tab:nth-child(6)',
      '.react-tabs__tab-list > .react-tabs__tab:nth-child(7)',
      '.react-tabs__tab-list > .react-tabs__tab:nth-child(8)',
    ];

    for (const tab of tabs) {
      await driver.findElement(By.css(tab)).click();
      await driver.sleep(1000);
    }

    console.log(`Test passed for ${browserConfig.browserName} on ${browserConfig.platform}`);
  } catch (e) {
    console.error(`Test failed for ${browserConfig.browserName} on ${browserConfig.platform}:`, e);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

(async function() {
  for (const browserConfig of browsers) {
    await runTest(browserConfig);
  }
})();
