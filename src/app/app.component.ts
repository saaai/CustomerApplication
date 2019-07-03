import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //created class named as AppComponent
  title = 'Customer Application'; //created variable named as title and it is assigned to Customer Application. We can consume this title on the UI using Expressions {{  }}.
}
