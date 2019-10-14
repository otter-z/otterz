import { IBrowser } from "../../utils/browser/IBrowser";

/** This is the base class for Scraps */
export abstract class BaseItem {
  protected selector: string;
  protected propName: string = "";

  constructor(propName: string, selector: string) {
    this.propName = propName;
    this.selector = selector;
  }

  public abstract scrap(browser: IBrowser): { [key: string]: string } | null;
}


