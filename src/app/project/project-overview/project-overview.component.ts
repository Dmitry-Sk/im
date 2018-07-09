import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Project } from './../../domain/entities/projects/project';
import { ProjectMetadataViewModel } from './../../domain/view-models/project-metadata-view-model';
import { SingleEntityResponseViewModel } from './../../domain/view-models/single-entity-response-view-model';
import { ProjectService } from './../shared/project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  projectId: string;
  projectData: SingleEntityResponseViewModel<
    Project,
    ProjectMetadataViewModel
  > = undefined;

  constructor(private route: ActivatedRoute, private service: ProjectService) {}

  ngOnInit() {
    Observable.from(this.route.pathFromRoot)
      .switchMap(route => route.params)
      .filter(params => params.id)
      .subscribe(params => {
        this.projectId = params.id;
        this.loadProjectData();
      });
  }

  async loadProjectData() {
    this.projectData = await this.service.getOne(this.projectId);
  }

  changeProjectStatus() {
    alert('I should show the modal');
  }
}
