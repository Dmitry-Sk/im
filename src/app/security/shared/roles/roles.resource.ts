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
import {
  RoleModel,
  Permission,
  Role
} from '../../../domain/view-models/security/role';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class RolesResource extends Resource {
  @ResourceAction({
    path: '/ListRoles'
  })
  getRoles: IResourceMethod<{}, Role[]>;

  @ResourceAction({
    path: '/ListAvailablePermissions'
  })
  getAvailablePermissions: IResourceMethod<{}, Permission[]>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/CreateRole',
    method: ResourceRequestMethod.Post
  })
  createRole: IResourceMethod<RoleModel, {}>;

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/DeleteRole',
    method: ResourceRequestMethod.Post
  })
  deleteRole: IResourceMethod<{ role: string }, {}>;

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/CreateRole',
    method: ResourceRequestMethod.Post
  })
  updateRole: IResourceMethod<RoleModel, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
