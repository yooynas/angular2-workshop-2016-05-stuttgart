export class WorkshopSeedAngular2Rc1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('workshop-seed-angular2-rc1-app h1')).getText();
  }
}
