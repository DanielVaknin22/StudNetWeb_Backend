// /* eslint-disable no-console */
// import {
//     Builder, By, Key, until, Capabilities
//   } from 'selenium-webdriver';
//   import assert from 'assert';
//   import chrome from 'selenium-webdriver/chrome.js';
  
//   const browsers = [
//     { browserName: 'chrome', platform: 'MAC' },
//     { browserName: 'safari', platform: 'MAC' },
//   ];
  
//   async function searchToolTest(browserConfig) {
//     let driver;
//     try {
//       if (browserConfig.browserName === 'chrome') {
//         const options = new chrome.Options();
//         options.addArguments('--headless');
//         options.addArguments('--disable-gpu');
//         options.addArguments('--no-sandbox');
//         options.addArguments('--disable-dev-shm-usage');
  
//         driver = await new Builder()
//           .forBrowser('chrome')
//           .setChromeOptions(options)
//           .usingServer('http://localhost:4444/wd/hub')
//           .build();
//       } else {
//         driver = await new Builder()
//           .usingServer('http://localhost:4444/wd/hub')
//           .withCapabilities(Capabilities[browserConfig.browserName]())
//           .build();
//       }
  
//       // Set the browser window size
//       await driver.manage().window().setRect({ width: 1920, height: 1080 });
  
//       // Navigate to the main page or dashboard where the search tool is located
//       await driver.get('http://localhost:3000/');
//       const title = await driver.getTitle();
//       assert.equal(title, 'StudNet - Social Network');
  
//       // Login and check if the user is redirected to the home page
//       await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
//       await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
//       await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();
  
//       await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
//       const currentUrl = await driver.getCurrentUrl();
//       assert.equal(currentUrl, 'http://localhost:3000/#/home');
  
//       // Locate the search button using a refined XPath
//       const searchButtonXPath = '//*[@id="root"]/nav/div/div[1]/div/a[3]';
//       let searchButton = await driver.wait(until.elementLocated(By.xpath(searchButtonXPath)), 10000);
  
//       // Scroll the search button into view before clicking
//       await driver.executeScript("arguments[0].scrollIntoView(true);", searchButton);
//       await driver.wait(until.elementIsVisible(searchButton), 10000);
//       await driver.wait(until.elementIsEnabled(searchButton), 10000);
  
//       // Click the search button
//       await searchButton.click();
  
//       // Ensure the search input field is visible before interacting with it
//       const searchInputXPath = '//*[@id="searchText"]';
//       let searchInput = await driver.wait(until.elementLocated(By.xpath(searchInputXPath)), 10000);
//       await driver.wait(until.elementIsVisible(searchInput), 10000);
//       await searchInput.sendKeys('Raphael Benoliel', Key.RETURN);
  
//       // Assuming the application redirects to a search results page, we wait for the page to load
//       await driver.wait(until.urlContains('search'), 10000);
  
//       // Verify that search results are displayed
//       let searchResults = await driver.findElements(By.css('p.sc-eKYjST.hMfRnh'));
//       // Verify that the results contain the expected text
//       for (let result of searchResults) {
//         let resultText = await result.getText();
//         assert(resultText.includes('Raphael Benoliel'), 'Search result does not contain the expected text.');
//       }
  
//       console.log(`Search tool test passed successfully for ${browserConfig.browserName}!`);
//     } catch (error) {
//       console.error(`Search tool test failed for ${browserConfig.browserName}:`, error);
//     } finally {
//       if (driver) {
//         await driver.quit();
//       }
//     }
//   }
  
//   (async function runAllTests() {
//     await Promise.all(browsers.map(searchToolTest));
//   })();
  