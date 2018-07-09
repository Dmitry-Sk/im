import { Injectable } from '@angular/core';
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceRequestMethod,
  ResourceHandler,
  ResourceParams
} from '@ngx-resource/core';
import { RequestMethod } from '@angular/http';

import { environment } from '../../../../environments/environment';
import { UserProfile } from './../../../domain/interfaces/user-profile/user-profile';
import { ResetPassword } from '../../../domain/interfaces/reset-password/reset-password';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class UserProfileResource extends Resource {
  @ResourceAction({
    path: '/GetProfile'
  })
  getUserProfile: IResourceMethod<{ userId: string }, UserProfile>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateUserProfile',
    method: ResourceRequestMethod.Post
  })
  updateUserProfile: IResourceMethod<{}, UserProfile>;

  @ResourceAction({
    url: environment.security.base,
    pathPrefix: '/Admin',
    path: '/Tenants/{!code}/Users/{!userId}/ResetPassword',
    method: ResourceRequestMethod.Post
  })
  resetPassword: IResourceMethod<ResetPassword, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
