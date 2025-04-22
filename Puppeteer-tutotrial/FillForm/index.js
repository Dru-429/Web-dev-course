const puppeteer = require("puppeteer-extra");

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

async function run() {

  console.log("Starting....")

  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  const url = "https://fill.dev/form/credit-card-simple";

  //let selector = "tagName[attribute='value']"
  let selector = "input[id='cc-name']";

  page.goto(url);

  await page.waitForSelector(selector); // wait for the selector to load only for the first time
  await page.type(selector, "Dru");

  selector = "select[id='cc-type']";
  await page.select(selector, "visa");

  selector = "input[id='cc-number']";
  await page.type(selector, "1234567890123456");

  selector = "input[id='cc-csc']";
  await page.type(selector, "429");

  selector = "select[id='cc-exp-month']";
  await page.select(selector, "07");

  selector = "select[id='cc-exp-year']";
  await page.select(selector, "2027");

  selector = "button[type='submit']"
  await page.click(selector)
}

run()