import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import {
  UserDefinedField,
  UserDefinedFieldResponse,
  UserDefinedFieldsList
} from '../../../domain/view-models/admin/user-defined-field';
import { UserDefinedFieldsResource } from './user-defined-fields.resource';

@Injectable()
export class UserDefinedFieldService {
  constructor(private userDefinedFieldsResource: UserDefinedFieldsResource) {}

  async getList(): Promise<UserDefinedFieldResponse<UserDefinedField>> {
    let responseViewModel: UserDefinedFieldResponse<
      UserDefinedField
    > = undefined;
    try {
      responseViewModel = await this.userDefinedFieldsResource.getList();
      responseViewModel.ViewModel = new ModelPropertiesMapper<UserDefinedField>(
        UserDefinedField
      ).mapMany(responseViewModel.ViewModel);
    } catch (error) {
      throw new Error(error);
    }

    return responseViewModel;
  }

  async update(userDefinedFieldsList: UserDefinedFieldsList): Promise<object> {
    let result;
    try {
      result = await this.userDefinedFieldsResource.update(
        userDefinedFieldsList
      );
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async removeItem(
    userDefinedFieldsList: UserDefinedFieldsList
  ): Promise<object> {
    let result;
    try {
      result = await this.userDefinedFieldsResource.update(
        userDefinedFieldsList
      );
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async addItem(userDefinedFieldsList: UserDefinedFieldsList): Promise<object> {
    let result;
    try {
      result = await this.userDefinedFieldsResource.update(
        userDefinedFieldsList
      );
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
