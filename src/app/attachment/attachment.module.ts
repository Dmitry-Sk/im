import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgUploaderModule } from 'ngx-uploader';

import { AttachmentsComponent } from './attachments/attachments.component';
import { AttachmentResource } from './shared/attachment.resource';
import { AttachmentService } from './shared/attachment.service';
import { ImageViewerModalComponent } from './shared/modals/image-viewer-modal/image-viewer-modal.component';

@NgModule({
  imports: [CommonModule, NgUploaderModule],
  declarations: [AttachmentsComponent, ImageViewerModalComponent],
  exports: [AttachmentsComponent],
  providers: [AttachmentService, AttachmentResource],
  entryComponents: [ImageViewerModalComponent]
})
export class AttachmentModule {}
