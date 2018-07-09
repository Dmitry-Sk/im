import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-mode-toggle',
  templateUrl: './view-mode-toggle.component.html',
  styleUrls: ['./view-mode-toggle.component.scss']
})
export class ViewModeToggleComponent {
  _viewMode: string;

  @Output() viewModeChange = new EventEmitter<string>();

  @Input()
  get viewMode(): string {
    return this._viewMode;
  }

  set viewMode(mode: string) {
    this._viewMode = mode;
    this.viewModeChange.emit(this._viewMode);
  }

  toggleViewMode() {
    if (this.viewMode === 'grid') this.viewMode = 'list';
    else this.viewMode = 'grid';
  }
}
