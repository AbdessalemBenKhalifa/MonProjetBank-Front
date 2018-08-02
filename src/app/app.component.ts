import { Component } from '@angular/core';

@Component({
  selector: 'Main',
  //templateUrl: './app.component.html',
  template : '<h1> Asslema {{title}} dans ANGULAR </h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ODDO-BHF';
}
