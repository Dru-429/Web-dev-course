const puppeteer = require("puppeteer-extra");
const locateChrome = require('chrome-location');

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath } = require("puppeteer");
puppeteer.use(StealthPlugin());

const url = "https://www.apple.com/in/shop/buy-iphone/iphone-16"

const givePage = async () => {
    const browser = await puppeteer.launch( {
        headless: false,
        executablePath: locateChrome
    } )
    let page = await browser.newPage()
    return page
}

async function clickBtn(page, selector, delay = 0) {
  await page.waitForSelector(selector);
  await page.evaluate((s) => document.querySelector(s).click(), selector);

  if (delay > 0) {
    await new Promise((res) => setTimeout(res, delay));
  }
}

async function run() {
  console.log("Starting....")
  const page = await givePage() 
  await page.goto(url)
  await add_to_cart(page)
}

async function add_to_cart(page) {
  await clickBtn(page, "input[data-autom='dimensionScreensize6_1inch']");
  await clickBtn(page, "input[value='black']");
  await clickBtn(page, "input[data-autom='dimensionCapacity256gb']");
  
  await clickBtn(page, "[id='noTradeIn']", 1500);
  await clickBtn(page, "[id='applecareplus_58_noapplecare']", 1500);
}

run()