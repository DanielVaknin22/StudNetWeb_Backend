/* eslint-disable import/no-extraneous-dependencies */
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

async function runLighthouseWithPuppeteer(url, options = { output: 'html' }, config = null) {
  const browser = await puppeteer.launch({ headless: true });
  const { port } = new URL(browser.wsEndpoint());

  const runnerResult = await lighthouse(url, { ...options, port }, config);

  const reportHtml = runnerResult.report;
  const reportPath = './lighthouse-report.html';
  writeFileSync(reportPath, reportHtml);

  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  await browser.close();
}

const url = 'https://studnet-frontend.onrender.com/'; // Change this to your site URL
runLighthouseWithPuppeteer(url);
