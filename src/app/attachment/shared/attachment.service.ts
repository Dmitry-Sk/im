import { Injectable } from '@angular/core';

import { AttachmentResource } from './attachment.resource';

@Injectable()
export class AttachmentService {
  constructor(private attachmentResource: AttachmentResource) {}

  async getList(parentId) {
    let attachmentsList;
    attachmentsList = await this.attachmentResource.getList(parentId);
    return attachmentsList;
  }

  async removeAttachment(idAndFilename) {
    let result;
    result = await this.attachmentResource.removeAttachment(idAndFilename);
    return result;
  }
}
