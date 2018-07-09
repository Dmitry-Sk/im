import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToasterService } from 'angular5-toaster';

import { Project } from './../../domain/entities/projects/project';
import { ProjectMetadataViewModel } from './../../domain/view-models/project-metadata-view-model';
import { SingleEntityResponseViewModel } from './../../domain/view-models/single-entity-response-view-model';
import { ProjectService } from './../shared/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  projectData: SingleEntityResponseViewModel<
    Project,
    ProjectMetadataViewModel
  > = undefined;

  constructor(
    private router: Router,
    private toaster: ToasterService,
    private service: ProjectService
  ) {}

  ngOnInit() {
    this.loadProjectData();
  }

  async loadProjectData() {
    this.projectData = await this.service.getOne('0');
  }

  async create(formRef: NgForm) {
    if (formRef.valid) {
      let result = await this.service.create(this.projectData.ViewModel);

      if (!result) return;

      this.toaster.pop(
        'success',
        'Created',
        'Project has been created successfully'
      );

      this.router.navigate(['project', result.Id]);
    }
  }
}
