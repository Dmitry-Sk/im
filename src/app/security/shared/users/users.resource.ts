import { Injectable } from '@angular/core';
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod
} from '@ngx-resource/core';

import { environment } from '../../../../environments/environment';
import { ResetPassword } from '../../../domain/interfaces/reset-password/reset-password';
import { PaginatedResponseViewModel } from '../../../domain/view-models/paginated-response-view-model';
import { Role } from '../../../domain/view-models/security/role';
import {
  CreateUserInfoForm,
  GetUsersPagedQueryBase,
  User,
  UserInfo
} from '../../../domain/view-models/security/user';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class UsersResource extends Resource {
  @ResourceAction({
    path: '/SearchUsers'
  })
  getList: IResourceMethod<
    GetUsersPagedQueryBase,
    PaginatedResponseViewModel<User>
  >;

  @ResourceAction({
    path: '/GetUser'
  })
  getUser: IResourceMethod<{ UserId: string }, UserInfo>;

  @ResourceAction({
    path: '/ListRoles'
  })
  getRoles: IResourceMethod<{}, Role[]>;

  // commands zone

  @ResourceAction({
    pathPrefix: '/commands/CreateUser',
    method: ResourceRequestMethod.Post
  })
  createUser: IResourceMethod<CreateUserInfoForm, {}>;

  @ResourceAction({
    pathPrefix: '/commands/UpdateUser',
    method: ResourceRequestMethod.Post
  })
  updateUser: IResourceMethod<UserInfo, {}>;

  @ResourceAction({
    pathPrefix: '/commands/DeactivateUser',
    method: ResourceRequestMethod.Post
  })
  deactivateUser: IResourceMethod<{ userId: string }, {}>;

  @ResourceAction({
    pathPrefix: '/commands/ActivateUser',
    method: ResourceRequestMethod.Post
  })
  activateUser: IResourceMethod<{ userId: string }, {}>;

  @ResourceAction({
    url: environment.security.base,
    pathPrefix: '/Admin/Tenants/{!code}/Users/{!userId}/ChangeUserName',
    method: ResourceRequestMethod.Post
  })
  changeUserName: IResourceMethod<
    { userId: string; code: string; userName: string },
    {}
  >;

  @ResourceAction({
    url: environment.security.base,
    pathPrefix: '/Admin/Tenants/{!code}/Users/{!userId}/MakePrimaryAdmin',
    method: ResourceRequestMethod.Post
  })
  makePrimaryAdmin: IResourceMethod<{ userId: string; code: string }, {}>;

  @ResourceAction({
    url: environment.security.base,
    pathPrefix: '/Admin/Tenants/{!code}/Users/{!userId}/ResetPassword',
    method: ResourceRequestMethod.Post
  })
  resetPassword: IResourceMethod<ResetPassword, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
