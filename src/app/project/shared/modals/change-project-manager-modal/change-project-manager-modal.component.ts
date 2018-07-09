import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs/Subject';

import { User } from '../../../../domain/entities/common/user';

@Component({
  selector: 'app-change-project-manager-modal',
  templateUrl: './change-project-manager-modal.component.html',
  styleUrls: ['./change-project-manager-modal.component.scss']
})
export class ChangeProjectManagerModalComponent implements OnInit {
  private onClose: Subject<User>;
  projectManagers: Array<User> = [];
  selectedProjectManager: User = undefined;

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject<User>();
    console.log('this.projectManagers', this.projectManagers);
  }

  submit(form: NgForm) {
    if (!form.valid) return;
    this.onClose.next(this.selectedProjectManager);
    this.bsModalRef.hide();
  }

  close() {
    this.onClose.next(null);
    this.bsModalRef.hide();
  }
}
