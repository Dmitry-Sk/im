import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { List } from 'linqts';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { EntityPath } from '../../domain/view-models/entity-path';
import { AuthService } from './../../core/auth.service';
import { ContextService } from './../../core/context.service';
import { AuthUser } from './../../domain/view-models/auth-user-view-model';
import { EntityPathSegment } from './../../domain/view-models/entity-path-segment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string = '';

  currentUser: AuthUser = undefined;

  logoutModalRef: BsModalRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private modalService: BsModalService
  ) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => {
        if (event.title) this.title = event.title;
      });

    ContextService.onContextChanged.subscribe((currentPath: EntityPath) => {
      console.log('Context path changed: ', currentPath);
      //this.title = currentPath.Segments[0].Name;
      if (!currentPath) return;
      this.title = new List<EntityPathSegment>(
        currentPath.Segments
      ).Last().Name;
    });
  }

  ngOnInit() {
    this.currentUser = this.authService.getUserProfile();
  }

  logout(template: TemplateRef<any>) {
    this.logoutModalRef = this.modalService.show(template, {
      class: 'modal-sm colored-header colored-header-warning'
    });
  }

  confirmLogout(): void {
    this.logoutModalRef.hide();
    this.authService.logout();
  }

  cancelLogout(): void {
    this.logoutModalRef.hide();
  }
}
