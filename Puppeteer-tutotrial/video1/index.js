const puppeteer = require( 'puppeteer-extra' );
// import pupputeer from 'puppeteer'

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


async function run() {

    const browser = await puppeteer.launch({ headless: false})
    const page = await browser.newPage()

    await page.goto( 'https://www.amazon.in/Apple-2024-MacBook-Laptop-10%E2%80%91core/dp/B0DLJ82ZMT/ref=sr_1_12_sspa?crid=N5F9P4MCCU84&dib=eyJ2IjoiMSJ9.vbUiFjvNSeTamKch6MBviZEtxxV6cAJBeeJfUq2xRkPfLyDyFI_XNUCQTXNb01rRD02ChDnziF7P55rKDZxysgd30_u7GlK_k22GbEtxopDbk9sKrTMMSByGD1vXQeDmPMejhq7jC8EfHKwUBGYNRENkqqYajEIzADnka2b91F73x3lWw2hY21wgf5pGNdW5lBjovjPJTipvgePAJyh3va0GzqxSmrTJwerQt5qqUEDAgZm5bTSeYc4W5tgLFOuD9ZTXSR9IMIsYIhoDtO8V4BNfOcQK49ovrXqaiX30OTQ.EX2RnPgqlHZr3tAGGxG-A8Hy77U6fKvraAf2lH5b6z8&dib_tag=se&keywords=macbook+m3&qid=1736406740&s=apparel&sprefix=macbook+m3%2Cfashion%2C282&sr=1-12-spons&srs=4347358031&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1' )
    // await page.setViewport({ width: 1080, height: 1024 })

    let selectorId = "add-to-cart-button"

    await page.waitForSelector( `#${selectorId}` )
    await page.evaluate( (selectorId) => {
        document.getElementById( selectorId ).click()
    }, selectorId)
    
}

run()