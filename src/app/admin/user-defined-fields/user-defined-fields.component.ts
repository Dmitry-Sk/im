import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as _ from 'underscore';

import {
  UserDefinedField,
  UserDefinedFieldResponse,
  UserDefinedFieldsList
} from '../../domain/view-models/admin/user-defined-field';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { EditItemCustomModalComponent } from '../shared/modals/edit-item-custom-modal/edit-item-custom-modal.component';
import { UserDefinedFieldService } from '../shared/user-defined-fields/user-defined-fields.service';

@Component({
  selector: 'app-user-defined-fields',
  templateUrl: './user-defined-fields.component.html',
  styleUrls: ['./user-defined-fields.component.scss']
})
export class UserDefinedFieldsComponent implements OnInit {
  userDefinedFields: UserDefinedFieldResponse<UserDefinedField>;
  private addUserDefinedFieldModalInstance: BsModalRef;
  private editUserDefinedFieldModalInstance: BsModalRef;
  private removeUserDefinedFieldModalInstance: BsModalRef;

  constructor(
    private userDefinedFieldService: UserDefinedFieldService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getList();
  }

  async getList() {
    try {
      this.userDefinedFields = await this.userDefinedFieldService.getList();
    } catch (error) {
      throw new Error(error);
    }
  }

  private async addUserDefinedField(
    userDefinedField: UserDefinedField
  ): Promise<void> {
    this.userDefinedFields.ViewModel.push(userDefinedField);
    let userDefinedFieldsList: UserDefinedFieldsList = {
      UserDefinedFields: this.userDefinedFields.ViewModel
    };
    try {
      await this.userDefinedFieldService
        .addItem(userDefinedFieldsList)
        .then(() => {
          this.toaster.pop(
            'success',
            'Items List Updated',
            'Items List has been updated successfully'
          );
        });
    } catch (error) {
      throw new Error();
    }
  }

  private async editUserDefinedField(
    userDefinedField: UserDefinedField,
    result: UserDefinedField
  ): Promise<void> {
    Object.assign(userDefinedField, result);
    let userDefinedFieldsList: UserDefinedFieldsList = {
      UserDefinedFields: this.userDefinedFields.ViewModel
    };
    try {
      await this.userDefinedFieldService
        .update(userDefinedFieldsList)
        .then(() => {
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

  private async removeUserDefinedField(
    userDefinedField: UserDefinedField
  ): Promise<void> {
    this.userDefinedFields.ViewModel = _.without(
      this.userDefinedFields.ViewModel,
      userDefinedField
    );
    let userDefinedFieldsList: UserDefinedFieldsList = {
      UserDefinedFields: this.userDefinedFields.ViewModel
    };
    try {
      await this.userDefinedFieldService
        .removeItem(userDefinedFieldsList)
        .then(() => {
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

  addUserDefinedFieldModal(): void {
    let initialState: object = {
      item: new UserDefinedField(),
      itemType: 'UserDefinedFields',
      action: 'Add',
      title: 'Add',
      metadata: this.userDefinedFields.Metadata
    };
    this.addUserDefinedFieldModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.addUserDefinedFieldModalInstance.content.onClose.subscribe(
      userDefinedField => {
        if (!userDefinedField) {
          return;
        }
        this.addUserDefinedField(userDefinedField);
      }
    );
  }

  editUserDefinedFieldModal(userDefinedField: UserDefinedField): void {
    let initialState: object = {
      item: userDefinedField,
      itemType: 'UserDefinedFields',
      action: 'Update',
      title: 'Edit',
      metadata: this.userDefinedFields.Metadata
    };
    this.editUserDefinedFieldModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.editUserDefinedFieldModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.editUserDefinedField(userDefinedField, result);
    });
  }

  confirmRemoveUserDefinedFieldModal(userDefinedField: UserDefinedField): void {
    const initialState: object = {
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item?',
      confirmButton: 'Remove',
      declineButton: 'Nevermind'
    };
    this.removeUserDefinedFieldModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.removeUserDefinedFieldModalInstance.content.onClose.subscribe(
      result => {
        if (!result) {
          return;
        }
        this.removeUserDefinedField(userDefinedField);
      }
    );
  }
}
