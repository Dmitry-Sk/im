import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs/Subject';

import { UserDefinedField } from '../../../../domain/view-models/admin/user-defined-field';

@Component({
  selector: 'app-edit-item-custom-modal',
  templateUrl: './edit-item-custom-modal.component.html',
  styleUrls: ['./edit-item-custom-modal.component.scss']
})
export class EditItemCustomModalComponent implements OnInit {
  private onClose: Subject<object>;
  item: object = {};
  _item: object = {};
  metadata: object = {};
  optionsList: Array<string> = [];
  groupTypes: Array<string> = [
    'Project',
    'Requirement',
    'Solution',
    'TestScenario',
    'Issue',
    'Workplan'
  ];
  suggestionStatuses: Array<string> = ['Accepted', 'Declined', 'Undecided'];
  action: string = '';
  title: string = '';
  itemType: string = '';

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
    this._item = Object.create(this.item);

    if (this.itemType === 'UserDefinedFields') {
      this.optionsList = (this._item as UserDefinedField).Options;
    }
  }

  addOptions(option: string) {
    if (!option) {
      return;
    } else {
      this.optionsList.push(option);
    }
  }

  hasProp(o: object, name: string): boolean {
    return o.hasOwnProperty(name);
  }

  update(itemForm: NgForm) {
    if (itemForm.invalid) {
      return;
    }
    if (this.itemType === 'UserDefinedFields') {
      (this._item as UserDefinedField).Options = this.optionsList;
    }
    this.onClose.next(this._item);
    this.bsModalRef.hide();
  }

  decline() {
    this.onClose.next();
    this.bsModalRef.hide();
  }
}
