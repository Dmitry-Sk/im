import { Component, group, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import * as _ from 'underscore';

import {
  Permission,
  RoleModel
} from '../../../domain/view-models/security/role';
import { RolesService } from '../../shared/roles/roles.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  permissions: Permission[] = [];
  createRoleModel: RoleModel = new RoleModel();
  parsedPermissions;
  groups: string[] = [];

  constructor(
    private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getAvailablePermissions();
  }

  async getAvailablePermissions(): Promise<void> {
    try {
      this.permissions = await this.rolesService.getAvailablePermissions();
      this.parsedPermissions = _.groupBy(this.permissions, 'Group');
      this.groups = Object.getOwnPropertyNames(this.parsedPermissions);
    } catch (error) {
      throw new Error(error);
    }
  }

  async createRole(roleInfoForm: NgForm): Promise<void> {
    try {
      if (roleInfoForm.valid) {
        _.each(
          this.parsedPermissions,
          (permissionGroup: Permission[], index) => {
            let whereHasRightResult = _.where(permissionGroup, {
              HasRight: true
            });
            _.map(whereHasRightResult, (el: Permission) => {
              this.createRoleModel.Permissions.push(el.Name);
            });
          }
        );
        await this.rolesService
          .createRole(this.createRoleModel)
          .then(() => {
            this.toaster.pop(
              'success',
              'Role Created',
              'Role has been created successfully'
            );
          })
          .then(() => {
            this.router.navigate(['../', this.createRoleModel.Name, 'edit'], {
              relativeTo: this.route
            });
          });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  checkRelated(event: boolean, selectedPermission: Permission): void {
    if (event) {
      _.each(this.groups, (group: string) => {
        _.each(this.parsedPermissions[group], (permission: Permission) => {
          _.each(selectedPermission.Related, (relatedPermission: string) => {
            if (permission.Name === relatedPermission) {
              permission.HasRight = true;
            }
          });
        });
      });
    } else {
      _.each(this.groups, (group: string) => {
        _.each(this.parsedPermissions[group], (permission: Permission) => {
          _.each(permission.Related, (relatedPermission: string) => {
            if (relatedPermission === selectedPermission.Name) {
              permission.HasRight = false;
            }
          });
        });
      });
    }
  }
}
