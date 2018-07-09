import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ContextService } from './../core/context.service';
import { ProjectService } from './shared/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  private projectId: string;

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

  ngOnDestroy() {
    ContextService.setCurrentPath(undefined);
  }

  async loadProjectData() {
    let projectData = await this.service.getOne(this.projectId);
    console.log('ProjectComponent', projectData.Path);
    ContextService.setCurrentPath(projectData.Path);
  }
}
