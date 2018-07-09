import { Injectable } from '@angular/core';
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod
} from '@ngx-resource/core';

import { environment } from './../../../environments/environment';

@Injectable()
@ResourceParams({
  url: environment.resources.base
})
export class AttachmentResource extends Resource {
  @ResourceAction({
    path: '/queries/GetAttachmentList'
  })
  getList: IResourceMethod<{ parentId: string }, {}>;

  @ResourceAction({
    path: '/FileStorage/RemoveAttachment?idAndFilename={!idAndFilename}',
    method: ResourceRequestMethod.Delete
  })
  removeAttachment: IResourceMethod<{ idAndFilename: string }, {}>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
