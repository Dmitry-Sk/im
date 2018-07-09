import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/Observable';

import {
  Budget,
  BudgetMetadata,
  LineItem,
  NewLineItem
} from '../../domain/view-models/budget/budget';
import { SingleEntityResponseViewModel } from '../../domain/view-models/single-entity-response-view-model';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { BudgetService } from '../shared/budget/budget.service';
import { AddNewBudgetLineModalComponent } from '../shared/modals/add-new-budget-line-modal/add-new-budget-line-modal.component';
import { EditBudgetLineModalComponent } from '../shared/modals/edit-budget-line-modal/edit-budget-line-modal.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  manifest: SingleEntityResponseViewModel<Budget, BudgetMetadata>;
  projectId: string = '';
  lineItems: Array<LineItem> = [];
  loading: boolean = false;
  private addNewLineItemModalInstance: BsModalRef;
  private updateLineItemModalInstance: BsModalRef;
  private removeLineItemModalInstance: BsModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private budgetService: BudgetService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    Observable.from(this.activatedRoute.pathFromRoot)
      .switchMap(route => route.params)
      .filter(params => params.id)
      .subscribe(params => {
        this.projectId = params.id;
        this.getList({ projectId: this.projectId });
      });
  }

  private async getList(projectId): Promise<void> {
    this.loading = true;
    try {
      this.manifest = await this.budgetService.getList(projectId);
      this.lineItems = this.manifest.ViewModel.LineItems;
    } catch (error) {
      return;
    }
    this.loading = false;
  }

  private async addNewLineItem(lineItem: NewLineItem): Promise<void> {
    lineItem.ProjectId = this.projectId;
    try {
      await this.budgetService
        .addLineItem(lineItem)
        .then(() => {
          this.toaster.pop(
            'success',
            'Line Item Added',
            'Line Item has been successfully added'
          );
        })
        .then(() => {
          this.getList({ projectId: this.projectId });
        });
    } catch (error) {
      return;
    }
  }

  private async updateLineItem(
    lineItem: LineItem,
    result: LineItem
  ): Promise<void> {
    Object.assign(lineItem, result);
    lineItem.ProjectId = this.projectId;
    lineItem.DateNeeded = moment(lineItem.DateNeeded).format('YYYY-MM-DD');
    try {
      await this.budgetService
        .updateLineItem(lineItem)
        .then(() => {
          this.toaster.pop(
            'success',
            'Line Item Updated',
            'Line Item has been successfully updated'
          );
        })
        .then(() => {
          this.getList({ projectId: this.projectId });
        });
    } catch (error) {
      return;
    }
  }

  private async removeLineItem(id: number): Promise<void> {
    try {
      await this.budgetService
        .removeLineItem({
          ProjectId: this.projectId,
          LineItemId: id
        })
        .then(() => {
          this.toaster.pop(
            'success',
            'Line Item Removed',
            'Line Item has been successfully removed'
          );
        })
        .then(() => {
          this.getList({ projectId: this.projectId });
        });
    } catch (error) {
      return;
    }
  }

  addNewLineModal(): void {
    this.addNewLineItemModalInstance = this.modalService.show(
      AddNewBudgetLineModalComponent,
      {
        initialState: {
          item: new NewLineItem(),
          catalogItems: this.manifest.Metadata.CatalogItems
        },
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.addNewLineItemModalInstance.content.onClose.subscribe(data => {
      if (!data) {
        return;
      }
      this.addNewLineItem(data);
    });
  }

  updateLineModal(lineItem: LineItem): void {
    lineItem.DateNeeded = moment(lineItem.DateNeeded).toDate();
    this.updateLineItemModalInstance = this.modalService.show(
      EditBudgetLineModalComponent,
      {
        initialState: {
          item: lineItem,
          catalogItems: this.manifest.Metadata.CatalogItems
        },
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.updateLineItemModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.updateLineItem(lineItem, result);
    });
  }

  confirmRemoveLineItemModal(id: number): void {
    this.removeLineItemModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState: {
          title: 'Remove Line Item',
          message: 'Are you sure you want to remove this line item?',
          confirmButton: 'Delete',
          declineButton: 'Nevermind'
        }
      }
    );
    this.removeLineItemModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.removeLineItem(id);
    });
  }
}
