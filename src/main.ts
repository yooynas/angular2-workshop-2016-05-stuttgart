import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WorkshopSeedAngular2Rc1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(WorkshopSeedAngular2Rc1AppComponent);
