import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-change-user-name-modal',
  templateUrl: './change-user-name-modal.component.html',
  styleUrls: ['./change-user-name-modal.component.scss']
})
export class ChangeUserNameModalComponent implements OnInit {
  onClose: Subject<string>;
  userName: string;

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
  }

  confirm(userNameForm) {
    if (userNameForm.valid) {
      this.onClose.next(this.userName);
      this.bsModalRef.hide();
    }
  }

  decline() {
    this.onClose.next();
    this.bsModalRef.hide();
  }
}
