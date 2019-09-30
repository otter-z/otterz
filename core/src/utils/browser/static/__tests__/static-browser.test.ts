
import StaticBrowser from "..";

const browser = new StaticBrowser();
beforeAll(async () => {
  await browser.goto("https://wikipedia.org");
})

test("select all link elements and get href attribute", async () => {
  expect(browser.getAttrs("a", "href")).toEqual([
    "#home",
    "#news",
    "#contact",
    "#about",
    "#extra",
  ]);
});

test("select by class and attribute and get same attribute", async () => {
  expect(browser.getAttrs(".drink-list [href]", "href")).toEqual(["#extra"]);
});

test("select by class and attribute and get different attribute", async () => {
  expect(browser.getAttrs('.drink-list [a="b"]', "href")).toEqual(["#extra"]);
});

test("select by class and emelement input type and get value", async () => {
  expect(browser.getAttrs(".food-list input", "value")).toEqual(["hallowin"]);
});

test("get children attributes", async () => {
  expect(browser.getChildrenAttrs(".nav", "href")).toEqual([
    "#home",
    "#news",
    "#contact",
    "#about",
  ]);
});

test("get children and select element which has specific attribute", async () => {
  expect(browser.getChildrenAttrs(".food-list", "value")).toEqual(["hallowin"]);
});

test("get texts", async () => {
  expect(browser.getTexts("a")).toEqual([
    "Home",
    "News",
    "Contact",
    "About",
    "Extra",
  ]);
});

test("get list of attributes", async () => {
  expect(browser.getTexts('.drink-list [a="b"]')).toEqual(["Tea", "Extra"]);
});

test("get children texts", async () => {
  expect(browser.getChildrenTexts("ol")).toEqual([
    "Coffee",
    "Tea",
    "Milk",
    "Extra",
  ]);
});


test("scrap text", async () => {
  expect(browser.scrapText("[href='#home']")).toEqual("Home")
})

test("scrap attribute", async () => {
  expect(browser.scrapAttribut("[href='#home']" , "href")).toEqual("#home")
})