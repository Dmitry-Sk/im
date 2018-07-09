import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-confirmation-warning-modal',
  templateUrl: './confirmation-warning-modal.component.html',
  styleUrls: ['./confirmation-warning-modal.component.scss']
})
export class ConfirmationWarningModalComponent implements OnInit {
  public onClose: Subject<boolean>;
  title: string = '';
  message: string = '';
  confirmButton: string = '';
  declineButton: string = '';

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
  }

  confirm() {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  decline() {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
