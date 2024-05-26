import { Builder, By, Key, until } from 'selenium-webdriver';
import assert from 'assert';

async function searchToolTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the main page or dashboard where the search tool is located
        await driver.get('http://localhost:3000/main');

        // Input a search term in the search field (adjust the selector as needed)
        const searchTerm = 'Example Search Term';
        await driver.findElement(By.id('searchInput')).sendKeys(searchTerm, Key.RETURN);

        // Assuming the application redirects to a search results page, we wait for the page to load
        await driver.wait(until.urlContains('search'), 10000);


        // Verify that search results are displayed


        //Need to add the element that we are presenting
        let searchResults = await driver.findElements(By.css('.searchResult'));
        assert(searchResults.length > 0, 'No search results were found.');

        // Optionally, verify that the results are relevant to the search term

        console.log('Search tool test passed successfully!');
    } catch (error) {
        console.error('Search tool test failed:', error);
    } finally {
        await driver.quit();
    }
}

searchToolTest();
