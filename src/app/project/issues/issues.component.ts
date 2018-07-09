import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Issue } from '../../domain/entities/issues/issue';
import { ItemsList } from './../../core/common/items-list';
import { IssueService } from './../../issue/shared/issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent extends ItemsList<Issue> implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) {
    super(issueService);
    this.sortFields = this.searchFields = ['Name', 'Description'];
  }

  ngOnInit() {
    Observable.from(this.route.pathFromRoot)
      .switchMap(route => route.params)
      .filter(params => params.id)
      .subscribe(params => {
        this.pagedQueryOptions.addSearchColumn('ProjectId', params.id, true);
        this.loadItems(true);
      });
  }
}
