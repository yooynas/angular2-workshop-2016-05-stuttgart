import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'workshop-app',
  templateUrl: 'workshop.component.html',
  styleUrls: ['workshop.component.css']
})
export class WorkshopAppComponent {
  title = 'workshop app works :) !';
}
