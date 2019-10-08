import { IResponse } from '../helper/request'
export * from './static'
export * from './dynamic'


/**
 * @summary Browser interface which each browser type needs to implement
 *  and hides the details.
 */
export interface IBrowser {
  /**
   * @summary browse the url and cahces the response internally
   * for parsing step
   * @param url  browser requests the url and returns the IResponse
   */
  goto(url: string): Promise<IResponse<string>>;

  /**
   *
   * @param selector A selector to query page for
   * @summary this method runs document.querySelector 
   * If element found it will return inner text of the element
   */
  scrapText(selector: string): string | null;

  /**
   *
   * @param selector A selector to query page for
   * @param attribute return attribute value from element
   * @summary this method runs document.querySelector 
   * If element found it will return attribute value of the element
   */
  scrapAttribut(selector: string, attribute: string): string | null;

  /**
   *
   * @param selector A selector to query page for
   * @summary returns true if element found else returns false 
   */
  isExist(selector: string) : boolean;
}
