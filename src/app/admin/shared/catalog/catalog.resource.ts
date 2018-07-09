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
  Catalog,
  CatalogList
} from '../../../domain/view-models/admin/catalog';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class CatalogResource extends Resource {
  @ResourceAction({
    path: '/GetCatalogItems'
  })
  getList: IResourceMethod<{}, Catalog[]>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateCatalog',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<CatalogList, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
