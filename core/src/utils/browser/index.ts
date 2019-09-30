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
   * @summary this method runs document.querySelector with selector
   * gets the element and returns the text value of the selector
   */
  scrapText(selector: string): string | undefined;

  scrapAttribut(selector: string, attribute: string): string | undefined;
}
