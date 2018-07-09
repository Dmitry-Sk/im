import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.draggable'
})
export class DraggableDirective {
  constructor(el: ElementRef) {
    console.log('asd');
    $(el.nativeElement).draggable();
  }
}
