import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { AuthService } from '../../../core/auth.service';
import { Role } from '../../../domain/view-models/security/role';
import { UserInfo } from '../../../domain/view-models/security/user';
import { ChangeUserNameModalComponent } from '../../shared/modals/change-user-name-modal/change-user-name-modal.component';
import { UserService } from '../../shared/users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userInfo: UserInfo;
  roleList: Role[] = [];
  private userNameModalInstance: BsModalRef;
  code: string = '';
  personTypes: Array<string> = ['Internal', 'External'];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private authService: AuthService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.code = this.authService.getTenantId();
    this.getUser();
    this.getRoles();
  }

  async getUser() {
    const userId = this.route.snapshot.params.userId;
    try {
      this.userInfo = await this.userService.getUser({ UserId: userId });
    } catch (error) {
      throw new Error(error);
    }
  }

  private async getRoles(): Promise<void> {
    try {
      this.roleList = await this.userService.getRoles();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(userInfoForm: NgForm): Promise<void> {
    try {
      if (userInfoForm.valid) {
        await this.userService.updateUser(this.userInfo).then(() => {
          this.toaster.pop(
            'success',
            'User Updated',
            'User data has been updated successfully'
          );
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async activateUser(): Promise<void> {
    try {
      await this.userService
        .activateUser({
          userId: this.userInfo.UserId
        })
        .then(() => {
          this.toaster.pop(
            'success',
            'User Activated',
            'User has been activated successfully'
          );
        })
        .then(() => {
          this.getUser();
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deactivateUser(): Promise<void> {
    try {
      await this.userService
        .deactivateUser({
          userId: this.userInfo.UserId
        })
        .then(() => {
          this.toaster.pop(
            'success',
            'User Deactivated',
            'User has been deactivated successfully'
          );
        })
        .then(() => {
          this.getUser();
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  async makePrimaryAdmin(): Promise<void> {
    try {
      await this.userService
        .makePrimaryAdmin({
          userId: this.userInfo.UserId,
          code: this.code
        })
        .then(() => {
          this.toaster.pop(
            'success',
            'Make Primary Admin',
            'User has been successfully set as Primary Admin'
          );
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  private async changeUserName(userName): Promise<void> {
    try {
      await this.userService
        .changeUserName({
          userId: this.userInfo.UserId,
          code: this.code,
          userName: userName
        })
        .then(() => {
          this.toaster.pop(
            'success',
            'User Name Changed',
            'User Name has been successfully changed'
          );
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  async resetPassword(): Promise<void> {
    try {
      await this.userService
        .resetPassword({
          userId: this.userInfo.UserId,
          code: this.code
        })
        .then(() => {
          this.toaster.pop(
            'success',
            'Password Reseted',
            'Password has been reseted successfully'
          );
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  changeUserNameModal() {
    this.userNameModalInstance = this.modalService.show(
      ChangeUserNameModalComponent
    );
    this.userNameModalInstance.content.onClose.subscribe(result => {
      if (result) {
        this.changeUserName(result);
      }
    });
  }
}
