const puppeteer = require("puppeteer-extra");

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

async function run() {
  console.log("Running ...");
  //   const browser = await puppeteer.launch({ headless: false });

  //for running it in the chrome 
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  const url =
    "https://www.amazon.in/Apple-MacBook-13-inch-10-core-Unified/dp/B0DZDDV7GC/ref=sr_1_3?crid=2TCFJF8O3R3L8&dib=eyJ2IjoiMSJ9.asb3l5WT-2IvI1DgvMjmGkFz4WJvBUXq_uRLmMgAA5ueoTtODfQVNr9e9BrByqUBql85xfDsLme9FMPheGHOc1KP1lVw8zhN1KIBIjyG4WvitWCC9y5JXdsCLR5olHVInIWAVKeO9XI-zQmo4zJPCsibDBmhqdlodBz3wtwaI_904l1JIkXkH1zTMMeQrsf6NRXo54lckpBZy-POkdBGAF0d1eQKeYD6AEaJDV2Ae6Y.89JmL1IAVJDHOoCHD8otp8qdneGlJpygdIMvwW1ft3A&dib_tag=se&keywords=macbook%2Bair%2Bm4&qid=1745309060&sprefix=mac%2Caps%2C281&sr=8-3&th=1";

  const selectorId = "add-to-cart-button";

  // Navigate the page to a URL.
  await page.goto(url);

  await page.waitForSelector(` #${selectorId}`);
  await page.evaluate((selectorId) => {
    document.getElementById(selectorId).click();
  }, selectorId);
}

run();
