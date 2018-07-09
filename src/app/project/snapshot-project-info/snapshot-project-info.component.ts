import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular5-toaster';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/Observable';

import { User } from '../../domain/entities/common/user';
import { Project } from '../../domain/entities/projects/project';
import { ProjectMetadataViewModel } from '../../domain/view-models/project-metadata-view-model';
import { SingleEntityResponseViewModel } from '../../domain/view-models/single-entity-response-view-model';
import { ProjectService } from '../shared/project.service';
import { ChangeProjectManagerModalComponent } from './../shared/modals/change-project-manager-modal/change-project-manager-modal.component';

@Component({
  selector: 'app-snapshot-project-info',
  templateUrl: './snapshot-project-info.component.html',
  styleUrls: ['./snapshot-project-info.component.scss']
})
export class SnapshotProjectInfoComponent implements OnInit {
  projectId: string;
  projectData: SingleEntityResponseViewModel<
    Project,
    ProjectMetadataViewModel
  > = undefined;

  constructor(
    private route: ActivatedRoute,
    private toaster: ToasterService,
    private service: ProjectService,
    private modalService: BsModalService
  ) {}

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

  async changeProjectManager() {
    let changeProjectModalInstance = this.modalService.show(
      ChangeProjectManagerModalComponent,
      {
        initialState: {
          projectManagers: this.projectData.Metadata.ProjectManagers,
          selectedProjectManager: this.projectData.ViewModel.ProjectManager
        },
        class: 'colored-header colored-header-warning content-overflow-visible'
      }
    );
    changeProjectModalInstance.content.onClose.subscribe(
      async (newProjectManager: User) => {
        if (newProjectManager) {
          await this.service.changeProjectManager(
            this.projectId,
            newProjectManager
          );
          this.projectData.ViewModel.ProjectManager = newProjectManager;
        }
      }
    );
  }

  async save(formRef: NgForm) {
    if (formRef.valid) {
      let result = await this.service.update(this.projectData.ViewModel);

      if (!result) return;

      formRef.form.markAsPristine();
      this.toaster.pop(
        'success',
        'Saved',
        'Project has been saved successfully'
      );
    }
  }
}
