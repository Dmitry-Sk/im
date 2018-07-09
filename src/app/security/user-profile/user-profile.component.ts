import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AuthService } from '../../core/auth.service';
import { ResetPassword } from '../../domain/interfaces/reset-password/reset-password';
import { UserProfile } from '../../domain/interfaces/user-profile/user-profile';
import { AuthUser } from '../../domain/view-models/auth-user-view-model';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { UserProfileService } from '../shared/user-profile/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile;
  resetPasswordModal: BsModalRef;
  resetDefaultLayoutModal: BsModalRef;
  emailPreferences: Array<string> = [
    'DoNotSend',
    'SendDaily',
    'SendImmediately'
  ];
  code: string = '';
  authUser;

  constructor(
    private userProfileService: UserProfileService,
    private modalService: BsModalService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authUser = this.authService.getUserProfile();
    this.code = this.authService.getTenantId();
    this.getUserProfile();
  }

  async getUserProfile(): Promise<void> {
    console.log(this.authUser);
    this.userProfile = await this.userProfileService.getUserProfile({
      userId: this.authUser.sub
    });
  }

  async update(userProfileForm: NgForm): Promise<void> {
    if (!userProfileForm.valid) {
      return;
    }
    await this.userProfileService.updateUserProfile(this.userProfile);
  }

  async resetPassword(data: ResetPassword): Promise<void> {
    await this.userProfileService.resetPassword(data);
  }

  async resetDefaultLayout(): Promise<void> {
    await alert('resetDefaultLayout');
  }

  confirmResetPasswordModal(): void {
    const initialState: object = {
      title: 'Reset Password',
      message: 'Are you sure you want to send reset password request?',
      confirmButton: 'Reset Passwrod',
      declineButton: 'Nevermind'
    };
    this.resetPasswordModal = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.resetPasswordModal.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.resetPassword({ userId: this.userProfile.UserId, code: this.code });
    });
  }

  confirmResetDefaultLayoutModal(): void {
    const initialState: object = {
      title: 'Reset Dafault Layout',
      message:
        'Are you sure you want to reset to default layout? This will reset all your grids, dashboard widgets configuration, etc.',
      confirmButton: 'Yes, Load Defaults',
      declineButton: 'Nevermind'
    };
    this.resetDefaultLayoutModal = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.resetDefaultLayoutModal.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
    });
  }
}
