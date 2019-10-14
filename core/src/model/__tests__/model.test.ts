import StaticBrowser from "../../utils/browser/static";
import { TextItem, ArrayItem, ObjectItem, AttributeItem } from "../scrap/index";

const browser = new StaticBrowser();

const textItem = new TextItem("header", ".b");
const textItemResult = {
  header: "About",
};

const attributeItem = new AttributeItem("data", "input.data", "value");
const attributeItemResult = {
  data: "hallowin",
};

const objectItem = new ObjectItem("result", ".nav", [textItem, attributeItem]);
const objectItemResult = {
  result: {
    ...textItemResult,
    ...attributeItemResult,
  },
};

const arrayItem = new ArrayItem("result", ".nav", [textItem, attributeItem]);
const arrayItemResult = {
  result: [textItemResult, attributeItemResult],
};

const nestedArrayItem = new ArrayItem("result", ".nav", [
  arrayItem,
  objectItem,
]);
const nestedArrayItemResult = {
  result: [arrayItemResult, objectItemResult],
};

const nestedObjectItem = new ObjectItem("result", ".nav", [
  arrayItem,
  objectItem,
]);
const nestedObjectItemResult = {
  result: { ...arrayItemResult , ...objectItemResult},
};

beforeAll(async () => {
  await browser.goto("http://www.example.model");
});

describe("scrap", () => {
  test("text item", async () => {
    expect(textItem.scrap(browser)).toEqual(textItemResult);
  });

  test("attribute item", () => {
    expect(attributeItem.scrap(browser)).toEqual(attributeItemResult);
  });

  test("array item", () => {
    expect(arrayItem.scrap(browser)).toEqual(arrayItemResult);
  });

  test("object item", () => {
    expect(objectItem.scrap(browser)).toEqual(objectItemResult);
  });

  test("nested array item", () => {
    expect(nestedArrayItem.scrap(browser)).toEqual(nestedArrayItemResult);
  });

  test("nested object item", () => {
    expect(nestedObjectItem.scrap(browser)).toEqual(nestedObjectItemResult);
  });
});
