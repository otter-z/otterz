import { BaseItem } from "./BaseItem";
import { IBrowser } from "../../utils/browser/IBrowser";
import { mergeDeepRight, defaultTo } from "ramda";

export class ObjectItem extends BaseItem {
  public items: BaseItem[];

  constructor(propName: string, selector: string, items: BaseItem[]) {
    super(propName, selector);
    this.items = items;
  }

  public scrap(browser: IBrowser): { [key: string]: any } | null {
    if (!browser.isExist(this.selector)) {
      return null;
    }

    return {
      [this.propName]: this.items
        .map(item => item.scrap(browser))
        .map(defaultTo({}))
        .reduce(mergeDeepRight, {}),
    };
  }
}
