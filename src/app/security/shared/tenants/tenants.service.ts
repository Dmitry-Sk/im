import { Injectable } from '@angular/core';

import { ModelPropertiesMapper } from '../../../core/model-properties-mapper';
import { PaginatedResponseViewModel } from '../../../domain/view-models/paginated-response-view-model';
import {
  GetTenantsPagedQueryBase,
  Tenant,
  TenantInfo,
  Code
} from '../../../domain/view-models/security/tenant';
import { TenantsResource } from './tenants.resource';

@Injectable()
export class TenantsService {
  constructor(private tenantsResource: TenantsResource) {}

  async getList(
    query: GetTenantsPagedQueryBase
  ): Promise<PaginatedResponseViewModel<Tenant>> {
    let pagedResponse: PaginatedResponseViewModel<Tenant>;
    try {
      pagedResponse = await this.tenantsResource.getList(query);
      pagedResponse.Items = new ModelPropertiesMapper<Tenant>(Tenant).mapMany(
        pagedResponse.Items
      );
    } catch (error) {
      throw new Error(error);
    }

    return pagedResponse;
  }

  async getTenant(code): Promise<TenantInfo> {
    let tenantInfoForm: TenantInfo;
    try {
      tenantInfoForm = await this.tenantsResource.getTenant(code);
    } catch (error) {
      throw new Error(error);
    }
    return tenantInfoForm;
  }

  async createTenant(tenant: TenantInfo): Promise<Code> {
    let result;
    try {
      result = await this.tenantsResource.createTenant(tenant);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async updateTenant(tenant: TenantInfo): Promise<void> {
    let result;
    try {
      result = await this.tenantsResource.updateTenant(tenant);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async deactivateTenant(code): Promise<void> {
    let result;
    try {
      result = await this.tenantsResource.deactivateTenant(code);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async activateTenant(code): Promise<void> {
    let result;
    try {
      result = await this.tenantsResource.activateTenant(code);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async restartTimers(tenantId): Promise<void> {
    let result;
    try {
      result = await this.tenantsResource.restartTimers(tenantId);
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  // async updateIndexes(code): Promise<void> {
  //   try {
  //     await this.tenantsResource.updateIndexes(code)
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }
}
