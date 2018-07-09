import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UploaderOptions, UploadInput, UploadOutput } from 'ngx-uploader';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/auth.service';
import { Attachment } from '../../domain/entities/common/attachment';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { AttachmentsConfig } from '../shared/attachment.config';
import { AttachmentService } from '../shared/attachment.service';
import { ImageViewerModalComponent } from '../shared/modals/image-viewer-modal/image-viewer-modal.component';

declare var urltemplate: any;

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {
  @Input() entityData;
  @Input() entityType: string = '';
  loading: boolean = false;
  private attachmentsEnviromentConfig: string = '';
  private attachmentsConfig: string = '';
  private removeAttachmentModalInstance: BsModalRef;
  private imageViewerModalInstance: BsModalRef;
  options: UploaderOptions;
  token: string = '';
  uploadInput: EventEmitter<UploadInput>;
  attachmentsList: Array<Attachment> = [];

  constructor(
    private attachmentService: AttachmentService,
    private authService: AuthService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {
    this.options = { concurrency: 1 };
    this.uploadInput = new EventEmitter<UploadInput>();
  }

  ngOnInit() {
    this.attachmentsEnviromentConfig =
      environment.attachments.attachmentsBaseUrl;
    this.token = this.authService.getAccessToken();
    this.getList();
  }

  private async getList(): Promise<void> {
    let parentId = {
      parentId: urltemplate
        .parse(AttachmentsConfig[this.entityType].loadUrl)
        .expand(this.entityData)
    };
    this.loading = true;
    try {
      this.attachmentsList = await this.attachmentService.getList(parentId);
    } catch (error) {
      return;
    }
    this.loading = false;
  }

  startUpload(output: UploadOutput) {
    if (output.type === 'allAddedToQueue') {
      let uploadUrl =
        this.attachmentsEnviromentConfig +
        urltemplate
          .parse(AttachmentsConfig[this.entityType].uploadUrl)
          .expand(this.entityData);
      const event: UploadInput = {
        type: 'uploadAll',
        url: uploadUrl,
        headers: { Authorization: 'Bearer ' + this.token },
        method: 'POST'
      };
      this.uploadInput.emit(event);
    }
    if (output.type === 'done') {
      this.toaster.pop(
        'success',
        'Attachment Uploaded',
        'Attachment has been successfully uploaded'
      );
    }
    this.getList();
  }

  openAttachment(attachment): void {
    // let attachmentLink =
    //   this.attachmentsEnviromentConfig +
    //   '/' +
    //   'GetAttachment?idAndFilename=' +
    //   attachment.Uri.replace('\\', '/') +
    //   '?token=' +
    //   this.token;
    let attachmentLink =
      this.attachmentsEnviromentConfig +
      '/' +
      attachment.Uri.replace('\\', '/') +
      '?token=' +
      this.token;

    if (attachment.Uri.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
      this.imageViewerModalInstance = this.modalService.show(
        ImageViewerModalComponent,
        {
          initialState: {
            attachmentUri: attachmentLink
          },
          class:
            'modal-lg colored-header colored-header-warning content-overflow-visible draggable'
        }
      );
    } else {
      window.open(attachmentLink, '_self');
    }
  }

  private async removeAttachment(attachment: Attachment): Promise<void> {
    this.entityData.fileName = attachment.FriendlyName;
    let removeUrl = urltemplate
      .parse(AttachmentsConfig[this.entityType].removeUrl)
      .expand(this.entityData);
    try {
      await this.attachmentService
        .removeAttachment({
          idAndFilename: removeUrl
        })
        .then(() => {
          this.toaster.pop(
            'success',
            'Attachment Removed',
            'Attachment has been successfully removed'
          );
        })
        .then(() => {
          this.getList();
        });
    } catch (error) {
      return;
    }
  }

  confirmRemoveAttachmentModal(attachment: Attachment): void {
    this.removeAttachmentModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState: {
          title: 'Remove Attachment',
          message: `Are you sure you want to remove ${
            attachment.FriendlyName
          }?`,
          confirmButton: 'Delete',
          declineButton: 'Nevermind'
        }
      }
    );
    this.removeAttachmentModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.removeAttachment(attachment);
    });
  }
}
