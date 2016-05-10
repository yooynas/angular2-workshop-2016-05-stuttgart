import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WorkshopSeedAngular2Rc1AppComponent } from '../app/workshop-seed-angular2-rc1.component';

beforeEachProviders(() => [WorkshopSeedAngular2Rc1AppComponent]);

describe('App: WorkshopSeedAngular2Rc1', () => {
  it('should create the app',
      inject([WorkshopSeedAngular2Rc1AppComponent], (app: WorkshopSeedAngular2Rc1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'workshop-seed-angular2-rc1 works!\'',
      inject([WorkshopSeedAngular2Rc1AppComponent], (app: WorkshopSeedAngular2Rc1AppComponent) => {
    expect(app.title).toEqual('workshop-seed-angular2-rc1 works!');
  }));
});
