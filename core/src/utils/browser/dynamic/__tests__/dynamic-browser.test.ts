import puppeteer, { Response } from "puppeteer";

// let page: puppeteer.Page;
// let browser: puppeteer.Browser;
// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//   });
//   page = await browser.newPage();
// });

describe("puppeteer", () => {
  // test("get links", async () => {
  //   const response = (await page.goto(
  //     "https://wikipedia.org"
  //   )) as Response;

  //   expect(await response.status()).toEqual(200);
  //   // const a = await page.$$eval("a", el => el.map(a => a.href));
  //   const a = await page.$$("a[href]");
  //   const hrefs = a.map((item: any) => item.href);
  //   expect(hrefs.length).toEqual(323);
  // });
  test("" , ()=>{
    expect("").toEqual("");
  })
});
