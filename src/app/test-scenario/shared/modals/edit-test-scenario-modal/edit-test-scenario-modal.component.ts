import { NgForm } from '@angular/forms';
import { TestScenarioService } from './../../test-scenario.service';
import { ToasterService } from 'angular5-toaster';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs/Subject';
import { TestScenario } from './../../../../domain/entities/test-scenarios/test-scenario';
import { SingleEntityResponseViewModel } from './../../../../domain/view-models/single-entity-response-view-model';
import { Component, OnInit } from '@angular/core';
import { TestScenarioMetadataViewModel } from '../../../../domain/view-models/test-scenario-metadata-view-model';
import { GetTestScenarioQuery } from '../../../../domain/queries/get-test-scenario.query';

@Component({
  selector: 'app-edit-test-scenario-modal',
  templateUrl: './edit-test-scenario-modal.component.html',
  styleUrls: ['./edit-test-scenario-modal.component.scss']
})
export class EditTestScenarioModalComponent implements OnInit {
  projectId: string;
  testScenarioId: string = '0';
  testScenarioData: SingleEntityResponseViewModel<
    TestScenario,
    TestScenarioMetadataViewModel
  > = undefined;
  formSubmitted: boolean = false;
  loading: boolean = false;

  private onClose: Subject<string>;

  constructor(
    private bsModalRef: BsModalRef,
    private toaster: ToasterService,
    private service: TestScenarioService
  ) {}

  ngOnInit() {
    this.onClose = new Subject<string>();
    this.loadTestScenarioData();
  }

  async loadTestScenarioData() {
    this.testScenarioData = await this.service.getOne(
      new GetTestScenarioQuery(this.projectId, this.testScenarioId)
    );
    if (!this.testScenarioData.ViewModel.ProjectId)
      this.testScenarioData.ViewModel.ProjectId = this.projectId;
  }

  async save(formRef: NgForm) {
    this.formSubmitted = true;
    if (formRef.valid) {
      let result;

      this.loading = true;

      if (this.testScenarioId === '0') {
        result = await this.service.create(this.testScenarioData.ViewModel);
      } else {
        result = await this.service.update(this.testScenarioData.ViewModel);
      }

      if (!result) return;

      this.toaster.pop(
        'success',
        'Created',
        'Test Scenario has been created successfully'
      );

      this.onClose.next(this.testScenarioId);
      this.loading = false;
      this.bsModalRef.hide();
    }
  }

  close() {
    this.bsModalRef.hide();
  }
}
