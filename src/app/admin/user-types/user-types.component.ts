import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import * as _ from 'underscore';

import {
  UserType,
  UserTypesList
} from '../../domain/view-models/admin/user-type';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { EditItemCustomModalComponent } from '../shared/modals/edit-item-custom-modal/edit-item-custom-modal.component';
import { UserTypesService } from '../shared/user-types/user-types.service';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})
export class UserTypesComponent implements OnInit {
  userTypes: UserType[] = [];
  private addUserTypeModalInstance: BsModalRef;
  private editUserTypeModalInstance: BsModalRef;
  private removeUserTypeModalInstance: BsModalRef;

  constructor(
    private userTypesService: UserTypesService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getList();
  }

  async getList() {
    this.userTypes = await this.userTypesService.getList();
  }

  private async addUserType(userType: UserType): Promise<void> {
    this.userTypes.push(userType);
    let userTypesList: UserTypesList = {
      UserTypes: this.userTypes
    };
    try {
      await this.userTypesService.addItem(userTypesList).then(() => {
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

  private async editUserType(
    userType: UserType,
    result: UserType
  ): Promise<void> {
    Object.assign(userType, result);
    let userTypesList: UserTypesList = {
      UserTypes: this.userTypes
    };
    try {
      await this.userTypesService.update(userTypesList).then(() => {
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

  private async removeUserType(userType: UserType): Promise<void> {
    this.userTypes = _.without(this.userTypes, userType);
    let userTypesList: UserTypesList = {
      UserTypes: this.userTypes
    };
    try {
      await this.userTypesService.removeItem(userTypesList).then(() => {
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

  addUserTypeModal(): void {
    let initialState: object = {
      item: new UserType(),
      itemType: 'UserType',
      action: 'Add',
      title: 'Add'
    };
    this.addUserTypeModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.addUserTypeModalInstance.content.onClose.subscribe(userType => {
      if (!userType) {
        return;
      }
      this.addUserType(userType);
    });
  }

  editUserTypeModal(userType: UserType): void {
    let initialState: object = {
      item: userType,
      itemType: 'UserType',
      action: 'Update',
      title: 'Edit'
    };
    this.editUserTypeModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.editUserTypeModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.editUserType(userType, result);
    });
  }

  confirmRemoveUserTypeModal(userType: UserType): void {
    const initialState: object = {
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item?',
      confirmButton: 'Remove',
      declineButton: 'Nevermind'
    };
    this.removeUserTypeModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.removeUserTypeModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.removeUserType(userType);
    });
  }
}
