import { Injectable } from '@angular/core';
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams
} from '@ngx-resource/core';

import { environment } from '../../../../environments/environment';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.security.base,
  pathPrefix: ''
})
export class SystemSettingsResource extends Resource {
  // @ResourceAction({
  //   url: environment.resources.base,
  //   path: '/Diagnostics/LogLevel'
  // })
  // getList: IResourceMethod<{}, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
