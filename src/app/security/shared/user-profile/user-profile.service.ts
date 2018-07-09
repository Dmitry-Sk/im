import { Injectable } from '@angular/core';

import { UserProfileResource } from './user-profile.resource';
import { UserProfile } from '../../../domain/interfaces/user-profile/user-profile';
import { ResetPassword } from '../../../domain/interfaces/reset-password/reset-password';

@Injectable()
export class UserProfileService {
  constructor(private userProfileResource: UserProfileResource) {}

  async getUserProfile(userId): Promise<UserProfile> {
    let userProfileResponse: UserProfile = await this.userProfileResource.getUserProfile(userId);
    let userProfile = new UserProfile();
    for (let p in userProfileResponse) {
      userProfile[p] = userProfileResponse[p];
    }
    return userProfile;
  }

  async updateUserProfile(userProfile: UserProfile): Promise<void> {
    await this.userProfileResource.updateUserProfile(userProfile);
  }

  async resetPassword(resetPasswordData: ResetPassword): Promise<void> {
    await this.userProfileResource.resetPassword(resetPasswordData);
  }
}
