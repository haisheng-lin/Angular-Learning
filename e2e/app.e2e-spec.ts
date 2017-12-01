import { AppPage } from './app.po';
import { browser } from 'protractor';

// 这里面所有的 task 都是自动完成的，包括自动导航，自动点击链接等
describe('con-fusion App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome Ristorante Con Fusion', () => {
    page.navigateTo('/');
    // app-root 里面第一个 h1 的元素 text 是这个
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to aboutus page by clicking on the link', () => {
    page.navigateTo('/');

    // 根据 home page 的结构，aboutus 的链接是第二个链接
    let navLink = page.getAllElements('a').get(1);
    navLink.click();

    expect(page.getParagraphText('h3')).toBe('About Us');
  });

  it('shold enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');

    // 对 template 中的指定元素进行赋值
    let newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author');

    let newComment = page.getElement('textarea');
    newComment.sendKeys('Test Comment');

    let newSubmitButton = page.getElement("button[type=submit]");
    newSubmitButton.click();

    browser.pause();
  });
});
