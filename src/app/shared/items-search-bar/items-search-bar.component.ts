import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-search-bar',
  templateUrl: './items-search-bar.component.html',
  styleUrls: ['./items-search-bar.component.scss']
})
export class ItemsSearchBarComponent implements OnInit {
  _searchFields: Array<string> = [];

  searchText: string = '';
  searchField: string = 'all';

  @Input() disabled: boolean = false;

  @Input()
  set searchFields(fields: Array<string>) {
    this._searchFields = fields;
  }

  @Output()
  onSearchChanged = new EventEmitter<{
    searchField: string;
    searchTerm: string;
  }>();

  constructor() {}

  private emitEvent() {
    this.onSearchChanged.emit({
      searchField: this.searchField,
      searchTerm: this.searchText
    });
  }

  ngOnInit() {}

  setField(field) {
    this.searchField = field;
    this.emitEvent();
  }

  search() {
    this.emitEvent();
  }
}
