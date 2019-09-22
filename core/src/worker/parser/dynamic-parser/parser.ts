import puppeteer from 'puppeteer';

export default class DynamicParser {
  private _url: string;
  constructor(url: string) {
    this._url = url;
  }
}
