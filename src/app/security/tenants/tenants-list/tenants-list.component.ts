import { Component, OnInit } from '@angular/core';

import { PaginatedResponseViewModel } from '../../../domain/view-models/paginated-response-view-model';
import { Tenant, GetTenantsPagedQueryBase } from '../../../domain/view-models/security/tenant';
import { TenantsService } from '../../shared/tenants/tenants.service';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent implements OnInit {
  tenantsPagedResponse: PaginatedResponseViewModel<Tenant> = undefined;
  pagedQueryOptions: GetTenantsPagedQueryBase = new GetTenantsPagedQueryBase();

  constructor(private tenantsService: TenantsService) {}

  ngOnInit() {
    this.getList();
  }

  async getList(): Promise<void> {
    try {
      const response = await this.tenantsService.getList(
        this.pagedQueryOptions
      );
      if (!this.tenantsPagedResponse) {
        this.tenantsPagedResponse = response;
      } else {
        this.tenantsPagedResponse.Items = this.tenantsPagedResponse.Items.concat(
          response.Items
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  loadMoreTenants() {
    this.pagedQueryOptions.CurrentPage++;
    this.getList();
  }
}
