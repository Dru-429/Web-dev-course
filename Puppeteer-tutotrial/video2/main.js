const puppeteer = require( 'puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(StealthPlugin())

async function run() {

    const browser = await puppeteer.launch( { hedless: false})
    const page = await browser.newPage()
    await page.goto( "https://fill.dev/form/credit-card-simple")

    //let selector = "tagName[attribute='value']"

    let selector = "input[id='cc-name']"
    await page.waitForSelector( selector)  // wait for the selector to load only for the first time 
    await page.type( selector, "Dru")

    selector = "select[id='cc-type']"
    await page.select(selector, "visa")

    selector = "input[id='cc-number']"
    await page.type(selector, "1234567890123456")

    selector = "input[id= 'cc-csc']"
    await page.type(selector, "429")

    // lets say the date is nov 2028
    selector = "select[id='cc-exp-month']"
    await page.select(selector, "11")

    selector = "select[id='cc-exp-year']"
    await page.select(selector, "2028")

    // selector = "button[type='submit']"
    // await page.click(selector)
}


run()