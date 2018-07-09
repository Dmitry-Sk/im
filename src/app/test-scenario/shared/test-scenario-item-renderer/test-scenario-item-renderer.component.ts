import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

import { TestScenario } from '../../../domain/entities/test-scenarios/test-scenario';
import { TestScenarioService } from '../test-scenario.service';
import { GetTestScenarioQuery } from './../../../domain/queries/get-test-scenario.query';
import { ItemRendererComponent } from './../../../shared/item-renderer/item-renderer.component';
import { EditTestScenarioModalComponent } from './../modals/edit-test-scenario-modal/edit-test-scenario-modal.component';

@Component({
  selector: 'app-test-scenario-item-renderer',
  templateUrl: './test-scenario-item-renderer.component.html',
  styleUrls: ['./test-scenario-item-renderer.component.scss']
})
export class TestScenarioItemRendererComponent extends ItemRendererComponent<
  TestScenario
> {
  constructor(
    private modalService: BsModalService,
    private testScenarioService: TestScenarioService
  ) {
    super();
  }
  editItem(item: TestScenario) {
    let modalInstance = this.modalService.show(EditTestScenarioModalComponent, {
      initialState: {
        projectId: item.ProjectId,
        testScenarioId: item.Id
      },
      class:
        'modal-lg colored-header colored-header-warning content-overflow-visible draggable'
    });

    modalInstance.content.onClose.subscribe(async () => {
      let testScenario = await this.testScenarioService.getOne(
        new GetTestScenarioQuery(this.item.ProjectId, this.item.Id)
      );
      this.item = testScenario.ViewModel;
    });
  }
}
