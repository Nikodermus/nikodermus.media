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

  timeout_close: any;
  constructor() { }

  ngOnInit() {
  }

  openingMenu() {
    console.log('opening menu')
    this.open_menu = true;
    this.show_right_side = false;
    this.navigation__links_element.nativeElement.classList.add('opacity-0', 'navigation__links--hidden');
  }

  openBar() {
    if (this.timeout_close) {
      clearTimeout(this.timeout_close);
      this.timeout_close = null;
    }
    this.open_hover = true;
  }

  closeBar() {
    this.timeout_close = setTimeout(() => {
      this.open_hover = false;
    }, 600)
  }

  closingMenu() {
    console.log('closing menu')
    this.show_right_side = true;
    this.open_hover = true;
    this.navigation__links_element.nativeElement.classList.remove('opacity-0', 'navigation__links--hidden');
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

}
