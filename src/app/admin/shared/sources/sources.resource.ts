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
import { Source, SourcesList } from '../../../domain/view-models/admin/source';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class SourcesResource extends Resource {
  @ResourceAction({
    path: '/GetSources'
  })
  getList: IResourceMethod<{}, Source[]>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateSources',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<SourcesList, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
