import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') color;
  @HostListener('window:keyup', ['$event']) windowKeyUp($event) {
    this.color = this.updateColor($event.key);
  }
  constructor() { }

  updateColor(key: string): string {
    let result;
    switch (key) {
      case 'ArrowUp':
        result = 'blue';
        break;
      case 'ArrowDown' :
        result = 'green';
        break;
      case 'ArrowLeft' :
        result = 'yellow';
        break;
      case 'ArrowRight':
        result = 'red';
        break;
      default:
        result = 'black';
    }
    return result;
  }

}
