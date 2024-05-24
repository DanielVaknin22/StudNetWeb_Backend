import { Builder, By, Key, until } from 'selenium-webdriver';
import assert from 'assert';

async function searchToolTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the main page or dashboard where the search tool is located
        
    await driver.get('http://localhost:3000/');
    const title = await driver.getTitle();
    // assert.equal(title, 'StudNet - Social Network');

    // login and check if the user is redirected to the home page
    await driver.findElement(By.css('input[type="email"]')).sendKeys('raphael2gb@gmail.com');
    await driver.findElement(By.css('input[type="password"]')).sendKeys('Raphael1');
    await driver.findElement(By.css('button.sc-eACynP.ipNQrM')).click();

    await driver.wait(until.urlIs('http://localhost:3000/#/home'), 10000);
    const currentUrl = await driver.getCurrentUrl();
    assert.equal(currentUrl, 'http://localhost:3000/#/home');





         // Locate the search button using a refined XPath
         
        const searchButtonXPath = '//*[@id="root"]/nav/div/div[1]/div/a[3]';
        let searchButton = await driver.wait(until.elementLocated(By.xpath(searchButtonXPath)), 10000);
        await searchButton.click();

        // Ensure the search input field is visible before interacting with it
        const searchInputXPath = '//*[@id="searchText"]'; // Adjust if necessary
        let searchInput = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath(searchInputXPath))), 10000);
        await searchInput.sendKeys('Raphael Benoliel', Key.RETURN);



        // Assuming the application redirects to a search results page, we wait for the page to load
        await driver.wait(until.urlContains('search'), 10000);
         // Verify that search results are displayed
         let searchResults = await driver.findElements(By.css('p.sc-eKYjST.hMfRnh'));
 
         // Verify that the results contain the expected text
         for (let result of searchResults) {
             let resultText = await result.getText();
             assert(resultText.includes('Raphael Benoliel'), 'Search result does not contain the expected text.');
         }
        

        // Optionally, verify that the results are relevant to the search term

        console.log('Search tool test passed successfully!');
    } catch (error) {
        console.error('Search tool test failed:', error);
    } finally {
        await driver.quit();
    }
}

searchToolTest();