// import { Builder, By, until } from 'selenium-webdriver';
// import assert from 'assert';

// (async function navBar() {
//     let driver;

//     try {
//       driver = await new Builder().forBrowser('chrome').build();
//       // driver = await new Builder().forBrowser('crome').usingServer('http://192.168.1.126:4444/wd/hub').build();

//         // driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('http://localhost:3000/');
//     const title = await driver.getTitle();
//     assert.equal(title, 'StudNet - Social Network');

//     // login and check if the user is redirected to the home page
//     await driver.findElement(By.css('input[type="email"]')).sendKeys('maorhadad94@gmail.com');
//     await driver.findElement(By.css('input[type="password"]')).sendKeys('Maor1122334455');
//     await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

//     await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
//     const currentUrl = await driver.getCurrentUrl();
//     assert.equal(currentUrl, 'http://localhost:3000/#/home');

//     // Getting to Nav Bar && profile page
//     await driver.sleep(1000);
//     await driver.get('http://localhost:3000/#/profile');
//     // await driver.sleep(2000);
//     // Gatting to the search page
//     await driver.get('http://localhost:3000/#/search');
//     // await driver.sleep(2000);
//     // Getting to the tools page
//     await driver.get('http://localhost:3000/#/tools');
//     // await driver.sleep(2000);
//     // Getting to the terms page
//     await driver.get('http://localhost:3000/#/terms');
//     // await driver.sleep(2000);
//     // Getting to the about page
//     await driver.get('http://localhost:3000/#/about');
//     // await driver.sleep(2000);
//     // Getting to the contact page
//     await driver.get('http://localhost:3000/#/terms');
//     await driver.sleep(2000);
//     // await driver.get('http://localhost:3000/#/a/my-area');
//     await driver.findElement(By.xpath('//*[@id="root"]/nav/div/div[2]/div/button')).click();
//     await driver.sleep(2000);
//     await driver.findElement(By.xpath('//*[@id="personal-area"]')).click();
//     await driver.sleep(2000);
//     await driver.findElement(By.xpath('//*[@id="root"]/nav/div/div[2]/div/button')).click();
//     await driver.sleep(2000);
//     await driver.findElement(By.xpath('//*[@id="account-menu"]/div[3]/ul/li[3]')).click();
//     await driver.sleep(2000);


    
    

    
//     console.log('Test passed!');
// } catch (e) {
//   console.error('Test failed:', e);
// } finally {
//   await driver.quit();
// }
// }());