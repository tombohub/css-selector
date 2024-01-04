import * as cheerio from "cheerio";

export class HtmlParser {
  $;
  constructor(html: string) {
    this.$ = cheerio.load(html, { xml: { xmlMode: false } });
  }

  /**
   * Perform css select query
   * @param cssSelector css selector
   * @returns list of selected html elements as an html string
   */
  public cssSelect(cssSelector: string) {
    if (cssSelector.length > 0) {
      const selectedNodelist = this.$(cssSelector);
      const selectedHtmlList = [...selectedNodelist].map(el => this.$.html(el));
      return selectedHtmlList;
    }
  }
}

/**
 * Perform css select query on given html string
 * @param html html string on which to perform css select
 * @param cssSelector css selector
 * @returns list of selected html elements as an html string
 */
export function cssSelect(html: string, cssSelector: string) {
  if (cssSelector.length > 0) {
    const $ = cheerio.load(html, { xml: { xmlMode: false } });
    const selectedNodelist = $(cssSelector);
    const selectedHtmlList = [...selectedNodelist].map(el => $.html(el));
    return selectedHtmlList;
  }
}
