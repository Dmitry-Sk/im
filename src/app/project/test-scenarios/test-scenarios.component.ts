import { EditTestScenarioModalComponent } from './../../test-scenario/shared/modals/edit-test-scenario-modal/edit-test-scenario-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ItemsList } from './../../core/common/items-list';
import { TestScenario } from './../../domain/entities/test-scenarios/test-scenario';
import { TestScenarioService } from './../../test-scenario/shared/test-scenario.service';

@Component({
  selector: 'app-test-scenarios',
  templateUrl: './test-scenarios.component.html',
  styleUrls: ['./test-scenarios.component.scss']
})
export class TestScenariosComponent extends ItemsList<TestScenario>
  implements OnInit {
  projectId: string;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private testScenarioService: TestScenarioService
  ) {
    super(testScenarioService);
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
    let createTestScenarioModalInstance = this.modalService.show(
      EditTestScenarioModalComponent,
      {
        initialState: {
          projectId: this.projectId
        },
        class:
          'modal-lg colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    createTestScenarioModalInstance.content.onClose.subscribe(() => {
      this.loadItems(true);
    });
  }
}
