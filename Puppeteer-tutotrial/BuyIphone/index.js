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

async function run() {
  const page = await givePage() 
  await page.goto(url)


}
