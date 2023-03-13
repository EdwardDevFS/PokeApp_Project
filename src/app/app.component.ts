import { Component } from '@angular/core';
import { Tab1Page } from './tab1/tab1.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  component = Tab1Page;
  constructor() {}
}
