import cheerio from 'cheerio';

export default class StaticParser {
  private _$: CheerioStatic;
  constructor(html: string) {
    this._$ = cheerio.load(html);
  }

  setHTML = (html: string): void => {
    this._$ = cheerio.load(html);
  };

  getAttrs = (selector: string, attr: string) => {
    let _this: any = this;
    return (this._$(selector)
      .map(function(_: any, el: CheerioElement) {
        return _this._$(el).attr(attr);
      })
      .toArray() as any) as string[];
  };

  getChildrenAttrs = (selector: string, attr: string) => {
    let _this: any = this;
    return (this._$(selector)
      .map(function(_: any, el: CheerioElement) {
        return _this
          ._$(el)
          .children()
          .map((_: any, e: CheerioElement) =>
            _this._$(`[${attr}]`, e).attr(attr)
          )
          .toArray();
      })
      .toArray() as any) as string[];
  };

  getTexts = (selector: string): string[] => {
    let _this: any = this;
    return (_this
      ._$(selector)
      .map(function(_: any, el: CheerioElement) {
        return _this._$(el).text();
      })
      .toArray() as any) as string[];
  };

  getChildrenTexts = (selector: string) => {
    let _this: any = this;
    return (this._$(selector)
      .map(function(_: any, el: CheerioElement) {
        return _this
          ._$(el)
          .children()
          .map((_: any, e: CheerioElement) => _this._$(e).text())
          .toArray();
      })
      .toArray() as any) as string[];
  };
}
