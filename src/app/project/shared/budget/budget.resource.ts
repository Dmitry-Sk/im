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
  Budget,
  BudgetMetadata,
  NewLineItem,
  LineItem
} from '../../../domain/view-models/budget/budget';
import { SingleEntityResponseViewModel } from '../../../domain/view-models/single-entity-response-view-model';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base
})
export class BudgetResource extends Resource {
  @ResourceAction({
    path: '/queries/GetProjectManifest'
  })
  getList: IResourceMethod<
    { projectId: string },
    SingleEntityResponseViewModel<Budget, BudgetMetadata>
  >;

  @ResourceAction({
    path: '/commands/AddLineItem',
    method: ResourceRequestMethod.Post
  })
  addLineItem: IResourceMethod<NewLineItem, {}>;

  @ResourceAction({
    path: '/commands/UpdateLineItem',
    method: ResourceRequestMethod.Post
  })
  updateLineItem: IResourceMethod<LineItem, {}>;

  @ResourceAction({
    path: '/commands/RemoveLineItem',
    method: ResourceRequestMethod.Post
  })
  removeLineItem: IResourceMethod<
    { ProjectId: string; LineItemId: string },
    {}
  >;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
