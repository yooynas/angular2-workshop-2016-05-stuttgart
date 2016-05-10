import { WorkshopSeedAngular2Rc1Page } from './app.po';

describe('workshop-seed-angular2-rc1 App', function() {
  let page: WorkshopSeedAngular2Rc1Page;

  beforeEach(() => {
    page = new WorkshopSeedAngular2Rc1Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('workshop-seed-angular2-rc1 works!');
  });
});
