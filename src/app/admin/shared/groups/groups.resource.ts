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
import { Group, GroupsList } from '../../../domain/view-models/admin/group';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class GroupsResource extends Resource {
  @ResourceAction({
    path: '/GetGroups'
  })
  getList: IResourceMethod<{}, Group[]>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateGroups',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<GroupsList, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
