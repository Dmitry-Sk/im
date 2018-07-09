import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { Observable } from 'rxjs/Observable';

import { SolutionService } from '../../solution/shared/solution.service';
import { ItemsList } from './../../core/common/items-list';
import { Solution } from './../../domain/entities/solutions/solution';
import { EditSolutionModalComponent } from './../../solution/shared/modals/edit-solution-modal/edit-solution-modal.component';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent extends ItemsList<Solution> implements OnInit {
  projectId: string;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private solutionService: SolutionService
  ) {
    super(solutionService);
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
    let createSolutionModalInstance = this.modalService.show(
      EditSolutionModalComponent,
      {
        initialState: {
          projectId: this.projectId
        },
        class:
          'modal-lg colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    createSolutionModalInstance.content.onClose.subscribe(() => {
      this.loadItems(true);
    });
  }
}
