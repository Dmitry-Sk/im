import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-confirmation-danger-modal',
  templateUrl: './confirmation-danger-modal.component.html',
  styleUrls: ['./confirmation-danger-modal.component.scss']
})
export class ConfirmationDangerModalComponent implements OnInit {
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
