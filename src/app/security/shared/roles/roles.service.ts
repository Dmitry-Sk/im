import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import {
  RoleModel,
  Permission,
  Role
} from '../../../domain/view-models/security/role';
import { RolesResource } from './roles.resource';

@Injectable()
export class RolesService {
  constructor(private rolesResource: RolesResource) {}

  async getRoles(): Promise<Role[]> {
    let rolesList: Role[] = [];
    try {
      rolesList = await this.rolesResource.getRoles();
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

  async getAvailablePermissions(): Promise<Permission[]> {
    let permissions: Permission[] = [];
    try {
      permissions = await this.rolesResource.getAvailablePermissions();
      permissions = new ModelPropertiesMapper<Permission>(Permission).mapMany(
        permissions
      );
    } catch (error) {
      throw new Error(error);
    }
    return permissions;
  }

  async updateRole(role: RoleModel): Promise<void> {
    let result;
    try {
      result = await this.rolesResource.updateRole(role);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async createRole(role: RoleModel): Promise<void> {
    let result;
    try {
      result = await this.rolesResource.createRole(role);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async deleteRole(role): Promise<void> {
    let result;
    try {
      result = await this.rolesResource.deleteRole(role);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }
}
