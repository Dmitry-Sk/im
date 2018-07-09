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
import { PaginatedResponseViewModel } from '../../../domain/view-models/paginated-response-view-model';
import {
  GetTenantsPagedQueryBase,
  Tenant,
  TenantInfo
} from '../../../domain/view-models/security/tenant';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.security.base,
  pathPrefix: '/Admin/System'
})
export class TenantsResource extends Resource {
  @ResourceAction({
    path: '/Tenants'
  })
  getList: IResourceMethod<
    GetTenantsPagedQueryBase,
    PaginatedResponseViewModel<Tenant>
  >;

  @ResourceAction({
    path: '/Tenants/{!Code}'
  })
  getTenant: IResourceMethod<{ Code: string }, TenantInfo>;

  @ResourceAction({
    path: '/Tenants/Create',
    method: ResourceRequestMethod.Post
  })
  createTenant: IResourceMethod<TenantInfo, { Code: string }>;

  @ResourceAction({
    path: '/Tenants/{!Code}',
    method: ResourceRequestMethod.Post
  })
  updateTenant: IResourceMethod<TenantInfo, {}>;

  @ResourceAction({
    path: '/Tenants/{!code}/Deactivate',
    method: ResourceRequestMethod.Post
  })
  deactivateTenant: IResourceMethod<{ code: string }, {}>;

  @ResourceAction({
    path: '/Tenants/{!code}/Activate',
    method: ResourceRequestMethod.Post
  })
  activateTenant: IResourceMethod<{ code: string }, {}>;

  @ResourceAction({
    pathPrefix: '',
    url: environment.resources.base,
    method: ResourceRequestMethod.Post,
    path: '/commands/RestartTimers'
  })
  restartTimers: IResourceMethod<{ tenantId: string }, {}>;

  // @ResourceAction({
  //   pathPrefix: '',
  //   url: environment.resources.base,
  //   path: '/queries/UpdateIndexes'
  // })
  // updateIndexes: IResourceMethod<{ code: string }, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
