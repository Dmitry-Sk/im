import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import * as _ from 'underscore';

import { Source, SourcesList } from '../../domain/view-models/admin/source';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { EditItemCustomModalComponent } from '../shared/modals/edit-item-custom-modal/edit-item-custom-modal.component';
import { SourcesService } from '../shared/sources/sources.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  sources: Source[] = [];
  private addSourceModalInstance: BsModalRef;
  private editSourceModalInstance: BsModalRef;
  private removeSourceModalInstance: BsModalRef;

  constructor(
    private sourcesService: SourcesService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getList();
  }

  private async getList(): Promise<any> {
    this.sources = await this.sourcesService.getList();
  }

  private async addSource(source: Source): Promise<void> {
    this.sources.push(source);
    let sourcesList: SourcesList = {
      Sources: this.sources
    };
    try {
      await this.sourcesService.addItem(sourcesList).then(() => {
        this.toaster.pop(
          'success',
          'Items List Updated',
          'Items List has been updated successfully'
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  private async editSource(source: Source, result: Source): Promise<void> {
    Object.assign(source, result);
    let sourcesList: SourcesList = {
      Sources: this.sources
    };
    try {
      await this.sourcesService.update(sourcesList).then(() => {
        this.toaster.pop(
          'success',
          'Items List Updated',
          'Items List has been updated successfully'
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async removeSource(source: Source): Promise<void> {
    this.sources = _.without(this.sources, source);
    let sourcesList: SourcesList = {
      Sources: this.sources
    };
    try {
      await this.sourcesService.removeItem(sourcesList).then(() => {
        this.toaster.pop(
          'success',
          'Items List Updated',
          'Items List has been updated successfully'
        );
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  addSourceModal(): void {
    let initialState: object = {
      item: new Source(),
      itemType: 'Source',
      action: 'Add',
      title: 'Add'
    };
    this.addSourceModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.addSourceModalInstance.content.onClose.subscribe(source => {
      if (!source) {
        return;
      }
      this.addSource(source);
    });
  }

  editSourceModal(source: Source): void {
    let initialState: object = {
      item: source,
      itemType: 'Source',
      action: 'Update',
      title: 'Edit'
    };
    this.editSourceModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.editSourceModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.editSource(source, result);
    });
  }

  confirmRemoveSourceModal(source: Source): void {
    const initialState: object = {
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item?',
      confirmButton: 'Remove',
      declineButton: 'Nevermind'
    };
    this.removeSourceModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.removeSourceModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.removeSource(source);
    });
  }
}
