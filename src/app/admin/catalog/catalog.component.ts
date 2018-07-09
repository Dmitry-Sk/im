import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import * as _ from 'underscore';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';

import { Catalog, CatalogList } from '../../domain/view-models/admin/catalog';
import { CatlogService } from '../shared/catalog/catalog.service';
import { EditItemCustomModalComponent } from '../shared/modals/edit-item-custom-modal/edit-item-custom-modal.component';
import { ConfirmationWarningModalComponent } from '../../shared/modals/confirmation-warning-modal/confirmation-warning-modal.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogs: Catalog[] = [];
  private addCatalogModalInstance: BsModalRef;
  private editCatalogModalInstance: BsModalRef;
  private removeCatalogModalInstance: BsModalRef;

  constructor(
    private catlogService: CatlogService,
    private modalService: BsModalService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.getList();
  }

  async getList() {
    this.catalogs = await this.catlogService.getList();
  }

  private async addCatalog(catalog: Catalog): Promise<void> {
    this.catalogs.push(catalog);
    let catalogsList: CatalogList = {
      Catalog: this.catalogs
    };
    try {
      await this.catlogService.addItem(catalogsList).then(() => {
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

  private async editCatalog(catalog: Catalog, result: Catalog): Promise<void> {
    Object.assign(catalog, result);
    let catalogsList: CatalogList = {
      Catalog: this.catalogs
    };
    try {
      await this.catlogService.update(catalogsList).then(() => {
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

  private async removeCatalog(catalog: Catalog): Promise<void> {
    this.catalogs = _.without(this.catalogs, catalog);
    let catalogsList: CatalogList = {
      Catalog: this.catalogs
    };
    try {
      await this.catlogService.removeItem(catalogsList).then(() => {
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

  addCatalogModal(): void {
    let initialState: object = {
      item: new Catalog(),
      itemType: 'Catalog',
      action: 'Add',
      title: 'Add'
    };
    this.addCatalogModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.addCatalogModalInstance.content.onClose.subscribe(catalog => {
      if (!catalog) {
        return;
      }
      this.addCatalog(catalog);
    });
  }

  editCatalogModal(catalog: Catalog): void {
    let initialState: object = {
      item: catalog,
      itemType: 'Catalog',
      action: 'Update',
      title: 'Edit'
    };
    this.editCatalogModalInstance = this.modalService.show(
      EditItemCustomModalComponent,
      {
        initialState,
        class:
          'colored-header colored-header-warning content-overflow-visible draggable'
      }
    );
    this.editCatalogModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.editCatalog(catalog, result);
    });
  }

  confirmRemoveCatalogModal(catalog: Catalog): void {
    const initialState: object = {
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item?',
      confirmButton: 'Remove',
      declineButton: 'Nevermind'
    };
    this.removeCatalogModalInstance = this.modalService.show(
      ConfirmationWarningModalComponent,
      {
        initialState
      }
    );
    this.removeCatalogModalInstance.content.onClose.subscribe(result => {
      if (!result) {
        return;
      }
      this.removeCatalog(catalog);
    });
  }
}
