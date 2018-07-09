import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';

import { Requirement } from '../../domain/entities/requirements/requirement';
import { ItemsList } from './../../core/common/items-list';
import { EditRequirementModalComponent } from './../../requirement/shared/modals/edit-requirement-modal/edit-requirement-modal.component';
import { RequirementService } from './../../requirement/shared/requirement.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent extends ItemsList<Requirement>
  implements OnInit {
  projectId: string;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private requirementService: RequirementService
  ) {
    super(requirementService);
    this.sortFields = this.searchFields = ['Name', 'Description'];
  }

  ngOnInit() {
    Observable.from(this.route.pathFromRoot)
      .switchMap(route => route.params)
      .filter(params => params.id)
      .subscribe(params => {
        this.projectId = params.id;
        this.pagedQueryOptions.addSearchColumn('ProjectId', params.id, true);
        this.loadItems(true);
      });
  }

  create() {
    let createRequirementModalInstance = this.modalService.show(
      EditRequirementModalComponent,
      {
        initialState: {
          projectId: this.projectId
        },
        class:
          'modal-lg colored-header colored-header-warning content-overflow-visible'
      }
    );
    createRequirementModalInstance.content.onClose.subscribe(() => {
      this.loadItems(true);
    });
  }
}
