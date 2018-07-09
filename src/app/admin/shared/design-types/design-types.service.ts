import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import {
  DesignType,
  DesignTypesList
} from '../../../domain/view-models/admin/design-type';
import { DesignTypesResource } from './design-types.resource';

@Injectable()
export class DesignTypesService {
  constructor(private designTypesResource: DesignTypesResource) {}

  async getList(): Promise<DesignType[]> {
    let designTypesResponse: DesignType[] = [];
    try {
      designTypesResponse = await this.designTypesResource.getList();
      designTypesResponse = new ModelPropertiesMapper<DesignType>(
        DesignType
      ).mapMany(designTypesResponse);
    } catch (error) {
      throw new Error(error);
    }
    return designTypesResponse;
  }

  async update(designTypesList: DesignTypesList): Promise<object> {
    let result;
    try {
      result = await this.designTypesResource.update(designTypesList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async removeItem(designTypesList: DesignTypesList): Promise<object> {
    let result;
    try {
      result = await this.designTypesResource.update(designTypesList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async addItem(designTypesList: DesignTypesList): Promise<object> {
    let result;
    try {
      result = await this.designTypesResource.update(designTypesList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
