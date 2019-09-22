import puppeteer from 'puppeteer';

let page: puppeteer.Page;
let browser: puppeteer.Browser;
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
});

describe('page eval', () => {
  test('get links', async () => {
    await page.goto('https://wikipedia.org');
    const urls: string[][] = await page.$$eval('a', items =>
      items.map((el: any): string => el.href)
    );

    expect(urls.length).toEqual(321);
  });
});

afterAll(async () => {
  await page.close();
  await browser.close();
});
