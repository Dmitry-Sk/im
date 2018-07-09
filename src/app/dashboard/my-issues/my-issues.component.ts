import { Component, OnInit } from '@angular/core';

import { ItemsList } from './../../core/common/items-list';
import { Issue } from './../../domain/entities/issues/issue';
import { IssueService } from './../../issue/shared/issue.service';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.scss']
})
export class MyIssuesComponent extends ItemsList<Issue> implements OnInit {
  constructor(private issueService: IssueService) {
    super(issueService);
    this.sortFields = this.searchFields = ['Name', 'Description'];
  }

  ngOnInit() {
    this.loadItems(true);
  }
}
