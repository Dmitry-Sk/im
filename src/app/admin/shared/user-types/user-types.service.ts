import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import {
  UserType,
  UserTypesList
} from '../../../domain/view-models/admin/user-type';
import { UserTypesResource } from './user-types.resource';

@Injectable()
export class UserTypesService {
  constructor(private userTypesResource: UserTypesResource) {}

  async getList(): Promise<UserType[]> {
    let sourcesResponse: UserType[] = [];
    try {
      sourcesResponse = await this.userTypesResource.getList();
      sourcesResponse = new ModelPropertiesMapper<UserType>(UserType).mapMany(
        sourcesResponse
      );
    } catch (error) {
      throw new Error(error);
    }

    return sourcesResponse;
  }

  async update(userTypesList: UserTypesList): Promise<object> {
    let result;
    try {
      result = await this.userTypesResource.update(userTypesList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async removeItem(userTypesList: UserTypesList): Promise<object> {
    let result;
    try {
      result = await this.userTypesResource.update(userTypesList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async addItem(userTypesList: UserTypesList): Promise<object> {
    let result;
    try {
      result = await this.userTypesResource.update(userTypesList);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
