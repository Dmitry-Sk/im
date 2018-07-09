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
  UserType,
  UserTypesList
} from '../../../domain/view-models/admin/user-type';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class UserTypesResource extends Resource {
  @ResourceAction({
    path: '/GetUserTypes'
  })
  getList: IResourceMethod<{}, UserType[]>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateUserTypes',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<UserTypesList, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
