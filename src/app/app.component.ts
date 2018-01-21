import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
}
