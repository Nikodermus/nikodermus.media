import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {
  open_hover = false;
  constructor() { }

  ngOnInit() {
  }

}
