import StaticBrowser from "../../utils/browser/static";
import { TextItem , ArrayItem , ObjectItem , AttributeItem} from "../index";

const browser = new StaticBrowser();

const textItem = new TextItem(
  "header",
  ".b"
);
const objectItem = new ObjectItem(
  "header",
  ".roduct-presentation-block__container__inner-content__header",
  []
);

const arrayItem = new ArrayItem(
  "header",
  ".roduct-presentation-block__container__inner-content__header",
  []
);

const attributeItem = new AttributeItem(
  "s10_img",
  "#main > div > div:nth-child(1) > div.product-presentation-block.full-viewport > div > div.product-presentation-block__promoted-item-container > div > div:nth-child(1) > a > div.promoted-item__product-image-container > img",
  "src"
);

beforeAll(async () => {
  await browser.goto("https://www.telenor.se");
});

describe("scrap", () => {
  test("textItem", async () => {
    expect(textItem.scrap(browser)).toEqual({
      header: "About",
    });
  });
});
