import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs/Subject';

import { ItemsList } from '../../../../core/common/items-list';
import { TestScenario } from '../../../../domain/entities/test-scenarios/test-scenario';
import { TestScenarioService } from '../../test-scenario.service';

@Component({
  selector: 'app-browse-test-scenarios-modal',
  templateUrl: './browse-test-scenarios-modal.component.html',
  styleUrls: ['./browse-test-scenarios-modal.component.scss']
})
export class BrowseTestScenariosModalComponent extends ItemsList<TestScenario>
  implements OnInit {
  public onClose: Subject<boolean>;
  constructor(
    private testScenarioService: TestScenarioService,
    private bsModalRef: BsModalRef
  ) {
    super(testScenarioService, 'NONE');
    this.sortFields = this.searchFields = ['Name', 'Description'];
  }

  ngOnInit() {
    this.onClose = new Subject();
    this.loadItems(true);
  }

  confirm() {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  decline() {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
