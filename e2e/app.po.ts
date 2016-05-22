export class WorkshopAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('workshop-app-app h1')).getText();
  }
}
