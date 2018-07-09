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
  DesignType,
  DesignTypesList
} from '../../../domain/view-models/admin/design-type';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class DesignTypesResource extends Resource {
  @ResourceAction({
    path: '/GetDesignTypes'
  })
  getList: IResourceMethod<{}, DesignType[]>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateDesignTypes',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<DesignTypesList, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
