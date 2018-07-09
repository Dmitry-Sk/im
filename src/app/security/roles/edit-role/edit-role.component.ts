import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import * as _ from 'underscore';

import {
  Permission,
  Role,
  RoleModel
} from '../../../domain/view-models/security/role';
import { ConfirmationDangerModalComponent } from '../../../shared/modals/confirmation-danger-modal/confirmation-danger-modal.component';
import { RolesService } from '../../shared/roles/roles.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  private deleteRoleModalInstance: BsModalRef;
  roles: Role[] = [];
  role: Role;
  roleName: string = '';
  parsedRolePermissions;
  groups: string[] = [];

  constructor(
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute,
    private toaster: ToasterService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.roleName = this.route.snapshot.params.roleName;
    this.loadRole();
  }

  async loadRole(): Promise<void> {
    try {
      this.roles = await this.rolesService.getRoles();
      this.role = _.findWhere(this.roles, { Name: this.roleName });
      this.parsedRolePermissions = _.groupBy(this.role.Permissions, 'Group');
      this.groups = Object.getOwnPropertyNames(this.parsedRolePermissions);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateRole(roleInfoForm: NgForm): Promise<void> {
    try {
      if (roleInfoForm.valid) {
        let updatedRole: RoleModel = new RoleModel();
        updatedRole.Name = this.roleName;
        _.each(
          this.parsedRolePermissions,
          (permissionGroup: Permission[], index) => {
            let whereHasRightResult = _.where(permissionGroup, {
              HasRight: true
            });
            _.map(whereHasRightResult, (el: Permission) => {
              updatedRole.Permissions.push(el.Name);
            });
          }
        );
        await this.rolesService.updateRole(updatedRole).then(() => {
          this.toaster.pop(
            'success',
            'Role Updated',
            'Role data has been updated successfully'
          );
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteRole(): Promise<void> {
    try {
      await this.rolesService.deleteRole({ role: this.roleName }).then(() => {
        this.toaster.pop(
          'success',
          'Role Deleted',
          'Role has been deleted successfully'
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  checkRelated(event: boolean, selectedPermission: Permission): void {
    if (event) {
      _.each(this.groups, (group: string) => {
        _.each(this.parsedRolePermissions[group], (permission: Permission) => {
          _.each(selectedPermission.Related, (relatedPermission: string) => {
            if (permission.Name === relatedPermission) {
              permission.HasRight = true;
            }
          });
        });
      });
    } else {
      _.each(this.groups, (group: string) => {
        _.each(this.parsedRolePermissions[group], (permission: Permission) => {
          _.each(permission.Related, (relatedPermission: string) => {
            if (relatedPermission === selectedPermission.Name) {
              permission.HasRight = false;
            }
          });
        });
      });
    }
  }

  deleteRoleModal(): void {
    const initialState: object = {
      title: 'Delete Role',
      message: 'Are you sure you want to delete this role?',
      confirmButton: 'Delete',
      declineButton: 'Nevermind'
    };
    this.deleteRoleModalInstance = this.modalService.show(
      ConfirmationDangerModalComponent,
      {
        initialState
      }
    );
    this.deleteRoleModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.deleteRole();
    });
  }
}
