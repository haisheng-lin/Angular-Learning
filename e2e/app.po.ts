import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  // 返回满足条件的第一个元素
  getElement(selector: string) {
    return element(by.css(selector));
  }

  // 返回满足条件的所有元素
  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
