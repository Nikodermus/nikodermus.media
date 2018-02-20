import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'nav',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {
  @Input() open_menu = false;
  @Output() emit_close_menu = new EventEmitter();
  @Output() emit_close_menu_end = new EventEmitter();
  @ViewChild('menu') menu_element: ElementRef;

  item_active = 'home';
  menu_item_active: MenuItem;
  quote_active: string;

  menu_content: MenuItem[] = [
    new MenuItem(
      'home',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_1.png',
        '/assets/img/designer_2.png',
        '/assets/img/designer_3.png',
      ]
    ),
    new MenuItem(
      'designer',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_1.png',
        '/assets/img/designer_2.png',
        '/assets/img/designer_3.png',
      ]
    ),
    new MenuItem(
      'developer',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_1.png',
        '/assets/img/designer_2.png',
        '/assets/img/designer_3.png',
      ]
    ),
    new MenuItem(
      'meet me',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_1.png',
        '/assets/img/designer_2.png',
        '/assets/img/designer_3.png',
      ]
    ),
    new MenuItem(
      'my works',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_1.png',
        '/assets/img/designer_2.png',
        '/assets/img/designer_3.png',
      ]
    ),
    new MenuItem(
      'the cv',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_1.png',
        '/assets/img/designer_2.png',
        '/assets/img/designer_3.png',
      ]
    ),
    new MenuItem(
      'own projects',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_1.png',
        '/assets/img/designer_2.png',
        '/assets/img/designer_3.png',
      ]
    ),
    new MenuItem(
      'legal',
      '',
      [{
        content: 'It is a jackpot when you get to know javascript can be debugged.',
        author: 'Mussadiq Abdul Rahim'
      }],
      [
        '/assets/img/designer_2.png',
        '/assets/img/designer_1.png',
        '/assets/img/designer_3.png',
      ]
    ),
  ];

  showContent(string) { };

  activeMenuItemImages(string: string) {
    console.log(this.menu_content.filter(elem => elem.name === string));
    return this.menu_content.filter(elem => elem.name === string)[0];
  }



  constructor() { }

  ngOnInit() {
    this.menu_element.nativeElement.classList.remove('menu--no-animation');
    this.menu_element.nativeElement.classList.add('menu--open');
    this.menu_item_active = this.activeMenuItemImages(this.item_active)

    this.quote_active = this.randomItem(this.menu_item_active.quotes);
  }

  ngAfterViewInit() {
    new WOW().init();
  }

  closeMenu() {
    this.open_menu = false;
    this.menu_element.nativeElement.classList.remove('menu--open')
    this.emit_close_menu.emit();
    this.menu_element.nativeElement.addEventListener(this.animationEvent, () => {
      this.emit_close_menu_end.emit();
    });
  }


  // Private data

  private randomItem(array: Array<any>) {
    return array[Math.floor(Math.random() * array.length)];
  }

  private animationEvent: any = this.whichAnimationEvent();

  private whichAnimationEvent() {
    let t;
    let el = document.createElement("ndermus");

    let animations = {
      "animation": "animationend",
      "OAnimation": "oAnimationEnd",
      "MozAnimation": "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (let t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  private whichTransitionEvent() {
    let t;
    let el = document.createElement("ndermus");

    let transitions = {
      "transition": "transitionend",
      "OTransition": "oTransitionEnd",
      "MozTransition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }



}
