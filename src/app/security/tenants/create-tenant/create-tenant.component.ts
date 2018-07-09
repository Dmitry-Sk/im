import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';

import { TenantInfo } from '../../../domain/view-models/security/tenant';
import { TenantsService } from '../../shared/tenants/tenants.service';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.scss']
})
export class CreateTenantComponent implements OnInit {
  tenant: TenantInfo = new TenantInfo();
  scopes: Array<string> = ['goPMO.Impel', 'goPMO.Impel.Reporting'];

  constructor(
    private tenantsService: TenantsService,
    private router: Router,
    private route: ActivatedRoute,
    private toaster: ToasterService
  ) {}

  ngOnInit() {}

  async create(tenantInfoForm: NgForm): Promise<void> {
    if (tenantInfoForm.invalid) {
      return;
    }
    try {
      await this.tenantsService
        .createTenant(this.tenant)
        .then(code => {
          this.toaster.pop(
            'success',
            'Tenant Created',
            'Tenant has been created successfully'
          );
          return code;
        })
        .then(code => {
          this.router.navigate(['../', code.Code, 'edit'], {
            relativeTo: this.route
          });
        });
    } catch (error) {
      throw new Error(error);
    }
  }
}
