import { BaseItem } from "./BaseItem";
import { IBrowser } from "../utils/browser/IBrowser";

export class AttributeItem extends BaseItem {
  public attribute: string;

  constructor(propName: string, selector: string, attribute: string) {
    super(propName, selector);
    this.attribute = attribute;
  }

  public scrap(browser: IBrowser): { [key: string]: string } | null {
    const result = browser.scrapAttribut(this.selector, this.attribute);
    if (result) {
      return { [this.propName]: result };
    } else {
      return null;
    }
  }
}


