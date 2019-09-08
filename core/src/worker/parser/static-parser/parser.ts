import cheerio from 'cheerio';

export default class StaticParser {
  private $: CheerioStatic;
  constructor(html: string) {
    this.$ = cheerio.load(html);
  }

  public setHTML = (html: string): void => {
    this.$ = cheerio.load(html);
  };

  public getAttrs = (selector: string, attr: string): string[] => {
    const self: any = this;
    return (this.$(selector)
      .map((i: any, el: CheerioElement) => {
        return self.$(el).attr(attr);
      })
      .toArray() as any) as string[];
  };

  public getChildrenAttrs = (selector: string, attr: string): string[] => {
    const self: any = this;
    return (this.$(selector)
      .map((_: any, el: CheerioElement) => {
        return self
          .$(el)
          .children()
          .map((i: any, e: CheerioElement) => self.$(`[${attr}]`, e).attr(attr))
          .toArray();
      })
      .toArray() as any) as string[];
  };

  public getTexts = (selector: string): string[] => {
    const self: any = this;
    return (self
      .$(selector)
      .map((_: any, el: CheerioElement) => {
        return self.$(el).text();
      })
      .toArray() as any) as string[];
  };

  public getChildrenTexts = (selector: string): string[] => {
    const self: any = this;
    return (this.$(selector)
      .map((_: any, el: CheerioElement) => {
        return self
          .$(el)
          .children()
          .map((i: any, e: CheerioElement) => self.$(e).text())
          .toArray();
      })
      .toArray() as any) as string[];
  };
}
