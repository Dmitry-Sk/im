import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import { Group, GroupsList } from '../../../domain/view-models/admin/group';
import { GroupsResource } from './groups.resource';

@Injectable()
export class GroupsService {
  constructor(private groupsResource: GroupsResource) {}

  async getList(): Promise<Group[]> {
    let groupsResponse: Group[] = [];
    try {
      groupsResponse = await this.groupsResource.getList();
      groupsResponse = new ModelPropertiesMapper<Group>(Group).mapMany(
        groupsResponse
      );
    } catch (error) {
      throw new Error(error);
    }
    return groupsResponse;
  }

  async update(groups: GroupsList): Promise<object> {
    let result;
    try {
      result = await this.groupsResource.update(groups);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async removeItem(groups: GroupsList): Promise<object> {
    let result;
    try {
      result = await this.groupsResource.update(groups);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async addItem(groups: GroupsList): Promise<object> {
    let result;
    try {
      result = await this.groupsResource.update(groups);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
