import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

import { CatalogItem } from '../../../../domain/view-models/budget/budget';

@Component({
  selector: 'app-add-new-budget-line-modal',
  templateUrl: './add-new-budget-line-modal.component.html',
  styleUrls: ['./add-new-budget-line-modal.component.scss']
})
export class AddNewBudgetLineModalComponent implements OnInit {
  private onClose: Subject<object>;
  item: object = {};
  catalogItems: Array<CatalogItem> = [];
  _item: object = {};

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
    this._item = Object.create(this.item);
  }

  hasProp(o: object, name: string): boolean {
    return o.hasOwnProperty(name);
  }

  update(newLineForm: NgForm) {
    if (newLineForm.invalid) {
      return;
    }
    this.onClose.next(this._item);
    this.bsModalRef.hide();
  }

  decline() {
    this.onClose.next();
    this.bsModalRef.hide();
  }
}
