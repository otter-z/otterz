import Scrap from "./scrap";

class AttributeScrap extends Scrap {
  public attribute: string;

  constructor(propName: string, selector: string, attribute: string) {
    super(propName, selector);
    this.attribute = attribute;
  }
}
