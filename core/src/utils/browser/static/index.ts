import cheerio from "cheerio";
import { IBrowser } from "../IBrowser";
import { IResponse, GET } from "../../helper";

export default class StaticBrowser implements IBrowser {
  private $: CheerioStatic | undefined;

  /** loads the specific URL in browser */
  public async goto(url: string): Promise<IResponse<string>> {
    const response = await GET(url);

    if (response.status < 400) {
      this.$ = cheerio.load(response.data);
      return response;
    } else {
      console.error(`status : ${response.status} , body : ${response.data}`);
      throw new Error(`status : ${response.status} , body : ${response.data}`);
    }
  }

  /** Scraps text from page */
  public scrapText(selector: string): string | null {
    if (!this.$) {
      return null;
    }

    const el = this.getFirstElement(selector);

    if (el) {
      return el.text();
    }
    return null;
  }

  /** Scraps attribute form page element by element selector */
  public scrapAttribut(selector: string, attr: string): string | null {
    if (!this.$) {
      return null;
    }

    const el = this.getFirstElement(selector);
    if (el) {
      return el.attr(attr);
    }
    return null;
  }

  /** tries to find the element prior to selector */
  public isExist(selector: string): boolean {
    if (!this.$) {
      return false;
    }

    const el = this.getFirstElement(selector);

    return !!el;
  }

  public getAttrs = (selector: string, attr: string): string[] => {
    const self: any = this;
    return (self
      .$(selector)
      .map((i: any, el: CheerioElement) => {
        return self.$(el).attr(attr);
      })
      .toArray() as any) as string[];
  }

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
  }

  public getTexts = (selector: string): string[] => {
    const self: any = this;
    return (self
      .$(selector)
      .map((_: any, el: CheerioElement) => {
        return self.$(el).text();
      })
      .toArray() as any) as string[];
  }

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
  }

  protected getFirstElement(selector: string): Cheerio | undefined {
    if (!this.$) {
      return undefined;
    }

    const el = this.$(selector);
    if (el.length) {
      return el.first();
    }

    return undefined;
  }
}
