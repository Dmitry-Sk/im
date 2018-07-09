import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular5-toaster/dist/bundles/angular5-toaster.umd';

import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/auth.service';
import { TenantInfo } from '../../../domain/view-models/security/tenant';
import { TenantsService } from '../../shared/tenants/tenants.service';

@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.scss']
})
export class EditTenantComponent implements OnInit {
  tenantInfo: TenantInfo;
  code: string = '';
  token: string = '';
  scopes = ['goPMO.Impel', 'goPMO.Impel.Reporting'];

  constructor(
    private route: ActivatedRoute,
    private tenantsService: TenantsService,
    private authService: AuthService,
    private toaster: ToasterService
  ) {}

  ngOnInit() {
    this.code = this.route.snapshot.params.code;
    this.token = this.authService.getAccessToken();
    this.getTenant({ Code: this.code });
  }

  async getTenant(code): Promise<void> {
    try {
      this.tenantInfo = await this.tenantsService.getTenant(code);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateTenant(tenantInfoForm: NgForm): Promise<void> {
    try {
      if (tenantInfoForm.valid) {
        await this.tenantsService.updateTenant(this.tenantInfo).then(() => {
          this.toaster.pop(
            'success',
            'Tenant Updated',
            'Tenant data has been updated successfully'
          );
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async deactivateTenant(): Promise<void> {
    try {
      await this.tenantsService
        .deactivateTenant({ code: this.code })
        .then(() => {
          this.toaster.pop(
            'success',
            'Tenant Deactivated',
            'Tenant has been deactivated successfully'
          );
        })
        .then(() => {
          this.getTenant({ Code: this.code });
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  async activateTenant(): Promise<void> {
    try {
      await this.tenantsService
        .activateTenant({ code: this.code })
        .then(() => {
          this.toaster.pop(
            'success',
            'Tenant Activated',
            'Tenant has been activated successfully'
          );
        })
        .then(() => {
          this.getTenant({ Code: this.code });
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  async restartTimers(): Promise<void> {
    try {
      await this.tenantsService
        .restartTimers({ tenantId: this.code })
        .then(() => {
          this.toaster.pop(
            'success',
            'Timers Restarted',
            'Timers have been restarted successfully'
          );
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateIndexes(): Promise<void> {
    // try {
    //   await this.tenantsService.updateIndexes({ code: this.code });
    // } catch (error) {
    //   throw new Error(error);
    // }
  }

  exportDB() {
    window.open(this.buildDatabaseUrl());
  }

  buildDatabaseUrl() {
    let path = `/Diagnostics/ExportDB/${this.code}?token=${this.token}`;
    let databaseUrl = `${environment.resources.base}${path}`;
    return databaseUrl;
  }
}
