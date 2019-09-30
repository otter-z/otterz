import cheerio from "cheerio";
import { IBrowser } from "..";
import { IResponse , GET } from '../../helper'


export default class StaticBrowser implements IBrowser {

  private $: CheerioStatic | undefined;

  public async goto(url: string): Promise<IResponse<string>> {
    try {
      const response = await GET(url);
      if (response.status < 400) {
        this.$ = cheerio.load(response.data);
      }
      return response;
    }
    catch (e) {
      console.error(e);
      throw (e);
    }
  }

  public scrapText(selector: string): string | undefined {
    const el = this.getFirstElement(selector);
    if (el) {
      return el.text();
    }
    return undefined;
  }

  public scrapAttribut(selector: string, attr: string): string | undefined {
    const el = this.getFirstElement(selector);
    if (el) {
      return el.attr(attr);
    }
    return undefined;
  }

  public getAttrs = (selector: string, attr: string): string[] => {
    const self: any = this;
    return (self
      .$(selector)
      .map((i: any, el: CheerioElement) => {
        return self.$(el).attr(attr);
      })
      .toArray() as any) as string[];
  };

  public getChildrenAttrs = (selector: string, attr: string): string[] => {
    const self: any = this;
    return (self
      .$(selector)
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
    return (self
      .$(selector)
      .map((_: any, el: CheerioElement) => {
        return self
          .$(el)
          .children()
          .map((i: any, e: CheerioElement) => self.$(e).text())
          .toArray();
      })
      .toArray() as any) as string[];
  };

  protected getFirstElement(selector: string): Cheerio | undefined {
    if (!this.$) {
      return undefined;
    }

    const el = this.$(selector);
    if (el.length) {
      return el.first()
    }

    return undefined;
  }
}
