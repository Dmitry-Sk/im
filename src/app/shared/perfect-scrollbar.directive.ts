import { Directive, OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js';

@Directive({
  selector: '[appPerfectScrollbar]'
})
export class PerfectScrollbarDirective implements OnInit {

  ngOnInit() {
    $(".left-sidebar-scroll").perfectScrollbar();
  }

}
