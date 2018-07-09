import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridWrapper]'
})
export class GridWrapperDirective implements OnInit {
  constructor(private elRef: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWrapper();
  }

  ngOnInit() {
    this.resizeWrapper();
  }

  private resizeWrapper() {
    this.elRef.nativeElement.style.height = window.innerHeight - 111 + 'px';
  }
}
