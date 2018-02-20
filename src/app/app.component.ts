import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
  wheel_event = this.whichWheelEvent();

  ngOnInit() {
    window.addEventListener(this.wheel_event,
      this.debounce(
        (e) => {
          console.log(e);
        }
      ));
  }


  private whichWheelEvent() {

    let mouse_events = {
      "onwheel": "wheel",
      "onmousewheel": "mousewheel",
    }

    for (let t in mouse_events) {
      if (window[t] !== undefined) {
        return mouse_events[t];
      }
    }
  }

  private debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}
