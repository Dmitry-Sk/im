import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';

import { AuthService } from '../../../core/auth.service';
import { Role } from '../../../domain/view-models/security/role';
import { RolesService } from '../../shared/roles/roles.service';
import { ConfirmationDangerModalComponent } from '../../../shared/modals/confirmation-danger-modal/confirmation-danger-modal.component';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {
  private deleteRoleModalInstance: BsModalRef;
  roles: Role[] = [];
  tenantCode: string = '';

  constructor(
    private rolesService: RolesService,
    private authService: AuthService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.tenantCode = this.authService.getTenantId();
    this.getList();
  }

  async getList(): Promise<void> {
    try {
      this.roles = await this.rolesService.getRoles();
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteRole(role): Promise<void> {
    try {
      await this.rolesService.deleteRole({ role: role.Name }).then(() => {
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

  deleteRoleModal(role): void {
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
      this.deleteRole(role);
    });
  }
}
