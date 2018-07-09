import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import * as _ from 'underscore';

import {
  DesignType,
  DesignTypesList
} from '../../domain/view-models/admin/design-type';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { DesignTypesService } from '../shared/design-types/design-types.service';
import { EditItemCustomModalComponent } from '../shared/modals/edit-item-custom-modal/edit-item-custom-modal.component';

@Component({
  selector: 'app-design-types',
  templateUrl: './design-types.component.html',
  styleUrls: ['./design-types.component.scss']
})
export class DesignTypesComponent implements OnInit {
  designTypes: DesignType[] = [];
  private addDesignTypeModalInstance: BsModalRef;
  private editDesignTypeModalInstance: BsModalRef;
  private removeDesignTypeModalInstance: BsModalRef;

  constructor(
    private designTypesService: DesignTypesService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getList();
  }

  private async getList() {
    this.designTypes = await this.designTypesService.getList();
  }

  private async addDesignType(designType: DesignType): Promise<void> {
    this.designTypes.push(designType);
    let designTypesList: DesignTypesList = {
      DesignTypes: this.designTypes
    };
    try {
      await this.designTypesService.addItem(designTypesList).then(() => {
        this.toaster.pop(
          'success',
          'Items List Updated',
          'Items List has been updated successfully'
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  private async editDesignType(
    designType: DesignType,
    result: DesignType
  ): Promise<void> {
    Object.assign(designType, result);
    let designTypesList: DesignTypesList = {
      DesignTypes: this.designTypes
    };
    try {
      await this.designTypesService.update(designTypesList).then(() => {
        this.toaster.pop(
          'success',
          'Items List Updated',
          'Items List has been updated successfully'
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  private async removeDesignType(designType: DesignType): Promise<void> {
    this.designTypes = _.without(this.designTypes, designType);
    let designTypesList: DesignTypesList = {
      DesignTypes: this.designTypes
    };
    try {
      await this.designTypesService.removeItem(designTypesList).then(() => {
        this.toaster.pop(
          'success',
          'Items List Updated',
          'Items List has been updated successfully'
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  addDesignTypeModal(): void {
    let initialState: object = {
      item: new DesignType(),
      itemType: 'DesignType',
      action: 'Add',
      title: 'Add'
    };
    this.addDesignTypeModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.addDesignTypeModalInstance.content.onClose.subscribe(designType => {
      if (!designType) {
        return;
      }
      this.addDesignType(designType);
    });
  }

  editDesignTypeModal(designType: DesignType): void {
    let initialState: object = {
      item: designType,
      itemType: 'DesignType',
      action: 'Update',
      title: 'Edit'
    };
    this.editDesignTypeModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.editDesignTypeModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.editDesignType(designType, result);
    });
  }

  confirmRemoveDesignTypeModal(designType: DesignType): void {
    const initialState: object = {
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item?',
      confirmButton: 'Remove',
      declineButton: 'Nevermind'
    };
    this.removeDesignTypeModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.removeDesignTypeModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.removeDesignType(designType);
    });
  }
}
