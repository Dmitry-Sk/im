import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

import { CatalogItem } from '../../../../domain/view-models/budget/budget';

@Component({
  selector: 'app-edit-budget-line-modal',
  templateUrl: './edit-budget-line-modal.component.html',
  styleUrls: ['./edit-budget-line-modal.component.scss']
})
export class EditBudgetLineModalComponent implements OnInit {
  private onClose: Subject<object>;
  item: object = {};
  catalogItems: Array<CatalogItem> = [];
  _item: object = {};

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
    this._item = Object.create(this.item);
  }

  update(editLineForm: NgForm): void {
    if (editLineForm.invalid) {
      return;
    }
    this.onClose.next(this._item);
    this.bsModalRef.hide();
  }

  decline(): void {
    this.onClose.next();
    this.bsModalRef.hide();
  }
}
