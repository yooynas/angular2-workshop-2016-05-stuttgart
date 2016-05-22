import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WorkshopAppComponent } from '../app/workshop-app.component';

beforeEachProviders(() => [WorkshopAppComponent]);

describe('App: WorkshopApp', () => {
  it('should create the app',
      inject([WorkshopAppComponent], (app: WorkshopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'workshop-app works!\'',
      inject([WorkshopAppComponent], (app: WorkshopAppComponent) => {
    expect(app.title).toEqual('workshop-app works!');
  }));
});
