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
import { WorkplanSettings } from '../../../domain/view-models/admin/workplan-settings';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class WorkplanSettingsResource extends Resource {
  @ResourceAction({
    path: '/GetWorkplanSettings'
  })
  getWorkplanSettings: IResourceMethod<{}, WorkplanSettings>;

  //commands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateWorkplanSettings',
    method: ResourceRequestMethod.Post
  })
  updateWorkplanSettings: IResourceMethod<WorkplanSettings, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
