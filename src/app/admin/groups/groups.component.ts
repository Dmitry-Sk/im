import { Component, group, OnInit } from '@angular/core';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as _ from 'underscore';

import { Group, GroupsList } from '../../domain/view-models/admin/group';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { GroupsService } from '../shared/groups/groups.service';
import { EditItemCustomModalComponent } from '../shared/modals/edit-item-custom-modal/edit-item-custom-modal.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[] = [];
  private addGroupModalInstance: BsModalRef;
  private editGroupModalInstance: BsModalRef;
  private removeGroupModalInstance: BsModalRef;

  constructor(
    private groupsService: GroupsService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getList();
  }

  private async getList(): Promise<void> {
    try {
      this.groups = await this.groupsService.getList();
    } catch (error) {
      throw new Error(error);
    }
  }

  private async addGroup(group: Group): Promise<void> {
    this.groups.push(group);
    let groupsList: GroupsList = {
      Groups: this.groups
    };
    try {
      await this.groupsService.addItem(groupsList).then(() => {
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

  private async editGroup(group: Group, result: Group): Promise<void> {
    Object.assign(group, result);
    let groupsList: GroupsList = {
      Groups: this.groups
    };
    try {
      await this.groupsService.update(groupsList).then(() => {
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

  private async removeGroup(group: Group): Promise<void> {
    this.groups = _.without(this.groups, group);
    let groupsList: GroupsList = {
      Groups: this.groups
    };
    try {
      await this.groupsService.removeItem(groupsList).then(() => {
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

  addGroupModal(): void {
    let initialState: object = {
      item: new Group(),
      itemType: 'Group',
      action: 'Add',
      title: 'Add'
    };
    this.addGroupModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.addGroupModalInstance.content.onClose.subscribe(group => {
      if (!group) {
        return;
      }
      this.addGroup(group);
    });
  }

  editGroupModal(group: Group): void {
    let initialState: object = {
      item: group,
      itemType: 'Group',
      action: 'Update',
      title: 'Edit'
    };
    this.editGroupModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.editGroupModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.editGroup(group, result);
    });
  }

  confirmRemoveGroupModal(group: Group): void {
    const initialState: object = {
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item?',
      confirmButton: 'Remove',
      declineButton: 'Nevermind'
    };
    this.removeGroupModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.removeGroupModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.removeGroup(group);
    });
  }
}
