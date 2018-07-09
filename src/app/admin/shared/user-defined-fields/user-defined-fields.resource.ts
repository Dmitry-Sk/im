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
  UserDefinedField,
  UserDefinedFieldResponse,
  UserDefinedFieldsList
} from '../../../domain/view-models/admin/user-defined-field';

@Injectable()
@ResourceParams({
  // IResourceParams
  url: environment.resources.base,
  pathPrefix: '/queries'
})
export class UserDefinedFieldsResource extends Resource {
  @ResourceAction({
    path: '/GetUserDefinedFields'
  })
  getList: IResourceMethod<{}, UserDefinedFieldResponse<UserDefinedField>>;

  //comands zone

  @ResourceAction({
    pathPrefix: '/commands',
    path: '/UpdateUserDefinedFields',
    method: ResourceRequestMethod.Post
  })
  update: IResourceMethod<UserDefinedFieldsList, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
