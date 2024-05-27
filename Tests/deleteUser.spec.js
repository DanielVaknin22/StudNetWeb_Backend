// import { Builder, By, until } from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome.js';

// import assert from 'assert';

// (async function deleteUser() {
//     let driver;
    
//     try {
//         driver = await new Builder().forBrowser('chrome').build();
//       // driver = await new Builder().forBrowser('crome').usingServer('http://192.168.1.126:4444/wd/hub').build();

//         await driver.get('http://localhost:3000/');
//         const title = await driver.getTitle();
//         assert.equal(title, 'StudNet - Social Network');
    
//         // login and check if the user is redirected to the home page
//         await driver.findElement(By.css('input[type="email"]')).sendKeys('a@z.com');
//         await driver.findElement(By.css('input[type="password"]')).sendKeys('Maor1122334455');
//     await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

//     await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
//     const currentUrl = await driver.getCurrentUrl();
//     assert.equal(currentUrl, 'http://localhost:3000/#/home');

//     // Getting to editing a profile through the navBar
//     await driver.get('http://localhost:3000/#/profile');
//     await driver.findElement(By.css('button.sc-bSkxYT.dWSFze')).click();

//     // Editing the profile
//     await driver.findElement(By.css('button.accountButton')).click();
//     await driver.sleep(2000);
//     await driver.findElement(By.xpath('//*[@id="panel:r1:0"]/div/div/form/button')).click();
//     await driver.sleep(2000);
//     await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/div[2]/button[1]')).click();
//     await driver.sleep(2000);
//     await driver.findElement(By.xpath('//*[@id="panel:r1:0"]/div/div/form/button')).click();
//     await driver.sleep(2000);
//     await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/div[2]/button[2]')).click();

      
//     console.log('Test passed!');
//   } catch (e) {
//     console.error('Test failed:', e);
//   } finally {
//     await driver.quit();
//   }
// }());