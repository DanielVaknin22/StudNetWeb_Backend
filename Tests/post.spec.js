// /* eslint-disable no-console */
// import { Builder, By, until } from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome.js';

// import assert from 'assert';

// (async function post() {
//   let driver;

//   try {
//     const options = new chrome.Options();
//   options.addArguments('--headless');
//   options.addArguments('--disable-gpu');
//   options.addArguments('--no-sandbox');
//   options.addArguments('--disable-dev-shm-usage');

//   driver = await new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(options)
//     .build();
//     await driver.get('http://localhost:3000/');

//     // login
//     await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
//     await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
//     await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

//     // upload a post and check if it was uploaded successfully
//     await driver.sleep(1000);
//     await driver.findElement(By.css('input.sc-dnwKUv.cCgyge')).sendKeys('Hello, World! from Selenium');
//     await driver.findElement(By.css('button.sc-kgKVFY.fEkNUb')).click();
//     await driver.sleep(1000);
//     await driver.wait(until.elementLocated(By.css('div.sc-fmSAUk.fmdfzI')), 10000);
//     const postText = await driver.findElement(By.css('h3.sc-fbJfA.sc-fGFwAa.eQTEMi.EdAWX'));
//     const text = await postText.getText();
//     assert.equal(text, 'Hello, World! from Selenium'); // Assert the text content of the post
//     console.log('Post uploaded successfully!');
//     await driver.sleep(2000);

//     // like the post and check if it was liked successfully
//     await driver.findElement(By.id('likeButton')).click();
//     await driver.sleep(600);
//     // reload the page to check if the like was saved
//     await driver.navigate().refresh();
//     await driver.wait(until.elementLocated(By.id('unlikeButton')), 10000);
//     console.log('Post liked successfully!');
//     await driver.sleep(2000);

//     // edit the post and check if it was edited successfully
//     await driver.findElement(By.css('button#fade-button.sc-bALXmG.bGVxTE')).click();
//     await driver.findElement(By.css('li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root')).click();
//     await driver.sleep(1000);
//     await driver.findElement(By.css('div.MuiBackdrop-root.MuiBackdrop-invisible.MuiModal-backdrop.css-g3hgs1-MuiBackdrop-root-MuiModal-backdrop')).click();
//     await driver.findElement(By.id(':r1:')).sendKeys('Post edited from Selenium');
//     await driver.findElement(By.id('postButton')).click();
//     await driver.sleep(1000);
//     await driver.wait(until.elementLocated(By.css('div.sc-fmSAUk.fmdfzI')), 10000);
//     const editPost = await driver.findElement(By.css('h3.sc-fbJfA.sc-fGFwAa.eQTEMi.EdAWX'));
//     const editText = await editPost.getText();
//     assert.equal(editText, 'Post edited from Selenium');
//     console.log('Post edited successfully!');
//     await driver.sleep(2000);

//     // delete the post and check if it was deleted successfully
//     await driver.findElement(By.css('button#fade-button.sc-bALXmG.bGVxTE')).click();
//     await driver.findElement(By.id('deletePost')).click();
//     await driver.sleep(2000);
//     console.log('Post deleted successfully!');

//     console.log('Post Test passed!');
//   } catch (e) {
//     console.error('Post Test failed:', e);
//   } finally {
//     await driver.quit();
//   }
// }());
