import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-selector',
  templateUrl: './sort-selector.component.html',
  styleUrls: ['./sort-selector.component.scss']
})
export class SortSelectorComponent implements OnInit {
  readonly sortDirections: Array<string> = ['Asc', 'Desc'];
  sortDirection: string = this.sortDirections[0];
  _sortFields: Array<string> = [];
  sortField: string = undefined;

  @Input() disabled: boolean = false;

  @Input()
  set sortFields(fields: Array<string>) {
    this._sortFields = fields;
    this.sortField = this._sortFields[0];
  }

  @Output()
  onSortChanged = new EventEmitter<{
    sortField: string;
    sortDirection: string;
  }>();

  constructor() {}

  private emitEvent() {
    this.onSortChanged.emit({
      sortField: this.sortField,
      sortDirection: this.sortDirection
    });
  }

  ngOnInit() {}

  setSortField(field) {
    this.sortField = field;
    this.emitEvent();
  }

  setSortOrder(direction) {
    this.sortDirection = direction;
    this.emitEvent();
  }
}
