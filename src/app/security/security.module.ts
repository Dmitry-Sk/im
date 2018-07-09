import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NG_SELECT_DEFAULT_CONFIG, NgSelectModule } from '@ng-select/ng-select';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PipesModule } from '../shared/pipes/pipes.module';
import { SharedModule } from './../shared/shared.module';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { SecurityComponent } from './security/security.component';
import { ChangeUserNameModalComponent } from './shared/modals/change-user-name-modal/change-user-name-modal.component';
import { SystemSettingsResource } from './shared/system-settings/system-settings.resource';
import { SystemSettingsService } from './shared/system-settings/system-settings.service';
import { TenantsResource } from './shared/tenants/tenants.resource';
import { TenantsService } from './shared/tenants/tenants.service';
import { UserProfileResource } from './shared/user-profile/user-profile.resource';
import { UserProfileService } from './shared/user-profile/user-profile.service';
import { UsersResource } from './shared/users/users.resource';
import { UserService } from './shared/users/users.service';
import { SystemSettingsComponent } from './system-settings/system-settings.component';
import { CreateTenantComponent } from './tenants/create-tenant/create-tenant.component';
import { EditTenantComponent } from './tenants/edit-tenant/edit-tenant.component';
import { TenantsListComponent } from './tenants/tenants-list/tenants-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { RolesResource } from './shared/roles/roles.resource';
import { RolesService } from './shared/roles/roles.service';
import { CreateRoleComponent } from './roles/create-role/create-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';

/* shared area */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    InfiniteScrollModule,
    RouterModule,
    SharedModule,
    NgSelectModule
  ],
  declarations: [
    SecurityComponent,
    TenantsListComponent,
    UsersListComponent,
    RolesListComponent,
    SystemSettingsComponent,
    UserProfileComponent,
    CreateTenantComponent,
    EditTenantComponent,
    EditUserComponent,
    ChangeUserNameModalComponent,
    CreateUserComponent,
    CreateRoleComponent,
    EditRoleComponent
  ],
  providers: [
    UserProfileResource,
    UserProfileService,
    UsersResource,
    UserService,
    TenantsResource,
    TenantsService,
    SystemSettingsResource,
    SystemSettingsService,
    RolesResource,
    RolesService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: '-- Not found --'
      }
    }
  ],
  entryComponents: [ChangeUserNameModalComponent]
})
export class SecurityModule {}
