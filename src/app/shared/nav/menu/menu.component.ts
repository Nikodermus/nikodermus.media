import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.menu_element.nativeElement.classList.remove('menu--no-animation');
    this.menu_element.nativeElement.classList.add('menu--open');
  }

  closeMenu() {
    this.open_menu = false;
    this.menu_element.nativeElement.classList.remove('menu--open')
    this.emit_close_menu.emit();
  }

  closeMenuEnd() {
    this.menu_element.nativeElement.addEventListener(this.animationEvent, () => {
      this.emit_close_menu_end.emit();
    });
  }

  // Private data

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
