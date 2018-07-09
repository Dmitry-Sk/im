import { Component, OnInit } from '@angular/core';

import { ItemsList } from '../../core/common/items-list';
import { Project } from '../../domain/entities/projects/project';
import { ProjectService } from './../../project/shared/project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent extends ItemsList<Project> implements OnInit {
  constructor(private projectService: ProjectService) {
    super(projectService);
    this.sortFields = this.searchFields = [
      'Name',
      'Description',
      'Type',
      'Status',
      'ProjectManager',
      'StartDate'
    ];
  }

  ngOnInit() {
    this.loadItems(true);
  }
}
