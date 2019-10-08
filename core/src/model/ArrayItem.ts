import { BaseItem } from "./BaseItem";
import { IBrowser } from "../utils/browser/IBrowser";
import { defaultTo } from "ramda";

export class ArrayItem extends BaseItem {
  public items: BaseItem[];

  constructor(propName: string, selector: string, items: BaseItem[]) {
    super(propName, selector);
    this.items = items;
  }

  public scrap(browser: IBrowser): { [key: string]: any } | null {
    if (!browser.isExist(this.selector)) {
      return null;
    }

    const result = this.items
      .map(item => item.scrap(browser))
      .map(defaultTo({}));

    if (result && result.length) {
      return { [this.propName]: result };
    } else {
      return null;
    }
  }
}


