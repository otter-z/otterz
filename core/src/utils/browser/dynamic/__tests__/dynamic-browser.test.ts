import puppeteer, { Response } from "puppeteer";

let page: puppeteer.Page;
let browser: puppeteer.Browser;
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.setViewport({
    width: 1024,
    height: 765,
    isMobile: false,

  });
});

describe("puppeteer", () => {
  test("get links", async () => {
    const response = (await page.goto(
      "https://www.amazon.com/Wyze-Indoor-Wireless-Detection-Assistant/dp/B076H3SRXG/ref=lp_16225009011_1_3?s=electronics&ie=UTF8&qid=1570197890&sr=1-3"
      // "https://www.amazon.com/ref=nav_logo"
    )) as Response;

    expect(await response.status()).toEqual(200);
    // // const a = await page.$$eval("a", el => el.map(a => a.href));
    // const a = await page.$$("a[href]");
    // const hrefs = a.map((item: any) => item.href);
    // expect(hrefs.length).toEqual(323);

    const reviewContent = await page.$(".reviews-content");
    expect(reviewContent).not.toBeNull();
    const reviewElements = await page.$$("div[data-hook='review']")
    const reviews = reviewElements.map((item: any) => item.innerHtml)
    expect(reviews.length).toEqual(0)

  }, 30000);

});
function timeout(ms : number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}