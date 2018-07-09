import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import {
  Catalog,
  CatalogList
} from '../../../domain/view-models/admin/catalog';
import { CatalogResource } from './catalog.resource';

@Injectable()
export class CatlogService {
  constructor(private catalogResource: CatalogResource) {}

  async getList(): Promise<Catalog[]> {
    let sourcesResponse: Catalog[] = [];
    try {
      sourcesResponse = await this.catalogResource.getList();
      sourcesResponse = new ModelPropertiesMapper<Catalog>(Catalog).mapMany(
        sourcesResponse
      );
    } catch (error) {
      throw new Error(error);
    }

    return sourcesResponse;
  }

  async update(catalogList: CatalogList): Promise<object> {
    let result;
    try {
      result = await this.catalogResource.update(catalogList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async removeItem(catalogList: CatalogList): Promise<object> {
    let result;
    try {
      result = await this.catalogResource.update(catalogList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async addItem(catalogList: CatalogList): Promise<object> {
    let result;
    try {
      result = await this.catalogResource.update(catalogList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
