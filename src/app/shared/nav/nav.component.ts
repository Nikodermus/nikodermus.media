import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {
  @ViewChild('navigation__open') navigation__open_element: ElementRef;
  @ViewChild('navigation__links') navigation__links_element: ElementRef;

  open_hover = false;
  open_menu = false;
  show_right_side = true;
  constructor() { }

  ngOnInit() {
  }

  openingMenu() {
    console.log('opening menu')
    this.open_menu = true;
    this.show_right_side = false;
    this.navigation__links_element.nativeElement.classList.add('opacity-0', 'navigation__links--hidden');
  }

  closingMenu() {
    console.log('closing menu')
    this.show_right_side = true;
    this.open_hover = true;
    this.navigation__links_element.nativeElement.classList.remove('opacity-0', 'navigation__links--hidden');
  }

}
