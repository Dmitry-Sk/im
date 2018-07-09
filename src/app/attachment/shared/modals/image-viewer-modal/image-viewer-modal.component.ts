import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-image-viewer-modal',
  templateUrl: './image-viewer-modal.component.html',
  styleUrls: ['./image-viewer-modal.component.scss']
})
export class ImageViewerModalComponent implements OnInit {
  attachmentUri: string = '';

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {}

  download() {
    window.open(this.attachmentUri);
    this.bsModalRef.hide();
  }

  decline() {
    this.bsModalRef.hide();
  }
}
