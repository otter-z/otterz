/**
 * @summary This is the base class for Scraps
 */
export default abstract class Scrap {
  public propName: string;
  public selector: string;

  constructor(propName: string, selector: string) {
    this.propName = propName;
    this.selector = selector;
  }
}
