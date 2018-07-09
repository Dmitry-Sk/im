import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import { PaginatedResponseViewModel } from '../../../domain/view-models/paginated-response-view-model';
import { Permission, Role } from '../../../domain/view-models/security/role';
import {
  CreateUserInfoForm,
  GetUsersPagedQueryBase,
  User,
  UserInfo
} from '../../../domain/view-models/security/user';
import { UsersResource } from './users.resource';

@Injectable()
export class UserService {
  constructor(private usersResource: UsersResource) {}

  async getList(
    query: GetUsersPagedQueryBase
  ): Promise<PaginatedResponseViewModel<User>> {
    let pagedResponse: PaginatedResponseViewModel<User>;
    try {
      pagedResponse = await this.usersResource.getList(query);
      pagedResponse.Items = new ModelPropertiesMapper<User>(User).mapMany(
        pagedResponse.Items
      );
    } catch (error) {
      throw new Error(error);
    }

    return pagedResponse;
  }

  async getUser(userId): Promise<UserInfo> {
    let userInfo: UserInfo;
    try {
      userInfo = await this.usersResource.getUser(userId);
      userInfo = new ModelPropertiesMapper<UserInfo>(UserInfo).mapOne(userInfo);
    } catch (error) {
      throw new Error(error);
    }
    return userInfo;
  }

  async getRoles(): Promise<Role[]> {
    let rolesList: Role[] = [];
    try {
      rolesList = await this.usersResource.getRoles();
      rolesList = new ModelPropertiesMapper<Role>(Role).mapMany(rolesList);
      rolesList.forEach(el => {
        el.Permissions = new ModelPropertiesMapper<Permission>(
          Permission
        ).mapMany(el.Permissions);
      });
    } catch (error) {
      throw new Error(error);
    }
    return rolesList;
  }

  async createUser(userInfo: CreateUserInfoForm): Promise<object> {
    let result;
    try {
      result = await this.usersResource.createUser(userInfo);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async updateUser(userInfo: UserInfo): Promise<void> {
    let result;
    try {
      result = await this.usersResource.updateUser(userInfo);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async deactivateUser(userId): Promise<void> {
    let result;
    try {
      result = await this.usersResource.deactivateUser(userId);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async activateUser(userId): Promise<void> {
    let result;
    try {
      result = await this.usersResource.activateUser(userId);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async changeUserName(userData): Promise<void> {
    let result;
    try {
      result = await this.usersResource.changeUserName(userData);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async makePrimaryAdmin(userData): Promise<void> {
    let result;
    try {
      result = await this.usersResource.makePrimaryAdmin(userData);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async resetPassword(userData): Promise<void> {
    let result;
    try {
      result = await this.usersResource.resetPassword(userData);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
