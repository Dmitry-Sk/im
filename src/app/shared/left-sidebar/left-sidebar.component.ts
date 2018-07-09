import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  public menuItems: Array<any> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.menuItems = activatedRoute.snapshot.data.leftSidebarMenuItems;
  }

  ngOnInit() {}
}
