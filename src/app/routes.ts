import { Routes } from '@angular/router';

import { CatalogComponent } from './admin/catalog/catalog.component';
import { DesignTypesComponent } from './admin/design-types/design-types.component';
import { GroupsComponent } from './admin/groups/groups.component';
import { SourcesComponent } from './admin/sources/sources.component';
import { UserDefinedFieldsComponent } from './admin/user-defined-fields/user-defined-fields.component';
import { UserTypesComponent } from './admin/user-types/user-types.component';
import { WorkplanSettingsComponent } from './admin/workplan-settings/workplan-settings.component';
import { IssuesComponent } from './archives/issues/issues.component';
import { ProjectsComponent } from './archives/projects/projects.component';
import { RequirementsComponent } from './archives/requirements/requirements.component';
import { SolutionsComponent } from './archives/solutions/solutions.component';
import { TestScenariosComponent } from './archives/test-scenarios/test-scenarios.component';
import { DashboardQuickOverviewComponent } from './dashboard/dashboard-quick-overview/dashboard-quick-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyActivitiesComponent } from './dashboard/my-activities/my-activities.component';
import { MyIssuesComponent } from './dashboard/my-issues/my-issues.component';
import { MyProjectsComponent } from './dashboard/my-projects/my-projects.component';
import { MyRequirementsComponent } from './dashboard/my-requirements/my-requirements.component';
import { MyReviewsComponent } from './dashboard/my-reviews/my-reviews.component';
import { MySolutionsComponent } from './dashboard/my-solutions/my-solutions.component';
import { MyTestScenariosComponent } from './dashboard/my-test-scenarios/my-test-scenarios.component';
import { LibraryComponent } from './library/library/library.component';
import { ProjectModule } from './project/project.module';
import { ReportingComponent } from './reporting/reporting/reporting.component';
import { CreateRoleComponent } from './security/roles/create-role/create-role.component';
import { EditRoleComponent } from './security/roles/edit-role/edit-role.component';
import { RolesListComponent } from './security/roles/roles-list/roles-list.component';
import { SystemSettingsComponent } from './security/system-settings/system-settings.component';
import { CreateTenantComponent } from './security/tenants/create-tenant/create-tenant.component';
import { EditTenantComponent } from './security/tenants/edit-tenant/edit-tenant.component';
import { TenantsListComponent } from './security/tenants/tenants-list/tenants-list.component';
import { UserProfileComponent } from './security/user-profile/user-profile.component';
import { CreateUserComponent } from './security/users/create-user/create-user.component';
import { EditUserComponent } from './security/users/edit-user/edit-user.component';
import { UsersListComponent } from './security/users/users-list/users-list.component';
import { sidebarMenuItems } from './sidebar-menu-items';
import { RequirementModule } from './requirement/requirement.module';

export function loadProjectScreenRoutes() {
  return ProjectModule;
}

export function loadRequirementScreenRoutes() {
  return RequirementModule;
}

export const appRoutes: Routes = [
  /* Dashboard */
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      leftSidebarMenuItems: sidebarMenuItems.rootLevel
    },
    children: [
      {
        path: '',
        redirectTo: 'quick-overview',
        pathMatch: 'full'
      },
      {
        path: 'quick-overview',
        component: DashboardQuickOverviewComponent,
        data: {
          title: 'Quick Overview'
        }
      },
      {
        path: 'my-projects',
        component: MyProjectsComponent,
        data: {
          title: 'My Projects'
        }
      },
      {
        path: 'my-requirements',
        component: MyRequirementsComponent,
        data: {
          title: 'My Requirements'
        }
      },
      {
        path: 'my-solutions',
        component: MySolutionsComponent,
        data: {
          title: 'My Solutions'
        }
      },
      {
        path: 'my-test-scenarios',
        component: MyTestScenariosComponent,
        data: {
          title: 'My Test Scenarios'
        }
      },
      {
        path: 'my-issues',
        component: MyIssuesComponent,
        data: {
          title: 'My Issues'
        }
      },
      {
        path: 'my-activities',
        component: MyActivitiesComponent,
        data: {
          title: 'My Activities'
        }
      },
      {
        path: 'my-reviews',
        component: MyReviewsComponent,
        data: {
          title: 'My Reviews'
        }
      }
    ]
  },
  /* Reporting */
  {
    path: 'reporting',
    component: ReportingComponent,
    data: {
      title: 'Reporting',
      leftSidebarMenuItems: sidebarMenuItems.rootLevel
    }
  },
  /* Archives */
  {
    path: 'archives',
    component: DashboardComponent,
    data: {
      title: 'Archives',
      leftSidebarMenuItems: sidebarMenuItems.rootLevel
    },
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Archived Projects'
        }
      },
      {
        path: 'requirements',
        component: RequirementsComponent,
        data: {
          title: 'Archived Requirements'
        }
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
        data: {
          title: 'Archived Solutions'
        }
      },
      {
        path: 'test-scenarios',
        component: TestScenariosComponent,
        data: {
          title: 'Archived Test Scenarios'
        }
      },
      {
        path: 'issues',
        component: IssuesComponent,
        data: {
          title: 'Archived Issues'
        }
      }
    ]
  },
  /* Admin */
  {
    path: 'admin',
    component: DashboardComponent,
    data: {
      title: 'Admin',
      leftSidebarMenuItems: sidebarMenuItems.rootLevel
    },
    children: [
      {
        path: '',
        redirectTo: 'groups',
        pathMatch: 'full'
      },
      {
        path: 'groups',
        component: GroupsComponent,
        data: {
          title: 'Admin \\ Groups'
        }
      },
      {
        path: 'sources',
        component: SourcesComponent,
        data: {
          title: 'Admin \\ Sources'
        }
      },
      {
        path: 'design-types',
        component: DesignTypesComponent,
        data: {
          title: 'Admin \\ Design Types'
        }
      },
      {
        path: 'user-types',
        component: UserTypesComponent,
        data: {
          title: 'Admin \\ User Types'
        }
      },
      {
        path: 'catalog',
        component: CatalogComponent,
        data: {
          title: 'Admin \\ Catalog'
        }
      },
      {
        path: 'user-defined-fields',
        component: UserDefinedFieldsComponent,
        data: {
          title: 'Admin \\ User Defined Fields'
        }
      },
      {
        path: 'workplan-settings',
        component: WorkplanSettingsComponent,
        data: {
          title: 'Admin \\ Workplan Settings'
        }
      }
    ]
  },
  /* Security */
  {
    path: 'security',
    component: DashboardComponent,
    data: {
      title: 'Security',
      leftSidebarMenuItems: sidebarMenuItems.rootLevel
    },
    children: [
      {
        path: '',
        redirectTo: 'tenants',
        pathMatch: 'full'
      },
      {
        path: 'tenants',
        component: TenantsListComponent,
        data: {
          title: 'Security \\ Tenants'
        }
      },
      {
        path: 'tenants/create',
        component: CreateTenantComponent,
        data: {
          title: 'Tenants \\ Create'
        }
      },
      {
        path: 'tenants/:code/edit',
        component: EditTenantComponent,
        data: {
          title: 'Tenants \\ Edit'
        }
      },
      {
        path: 'users',
        component: UsersListComponent,
        data: {
          title: 'Security \\ Users'
        }
      },
      {
        path: 'tenants/:code/users/:userId/edit',
        component: EditUserComponent,
        data: {
          title: 'User \\ Edit'
        }
      },
      {
        path: 'tenants/:code/users/create',
        component: CreateUserComponent,
        data: {
          title: 'User \\ Create'
        }
      },
      {
        path: 'roles',
        component: RolesListComponent,
        data: {
          title: 'Security \\ Roles'
        }
      },
      {
        path: 'tenants/:code/roles/create',
        component: CreateRoleComponent,
        data: {
          title: 'Roles \\ Create'
        }
      },
      {
        path: 'tenants/:code/roles/:roleName/edit',
        component: EditRoleComponent,
        data: {
          title: 'Roles \\ Edit'
        }
      },
      {
        path: 'settings',
        component: SystemSettingsComponent,
        data: {
          title: 'Security \\ System Settings'
        }
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        data: {
          title: 'Security \\ Profile'
        }
      }
    ]
  },
  /* Library */
  {
    path: 'library',
    component: LibraryComponent,
    data: {
      title: 'Library',
      leftSidebarMenuItems: sidebarMenuItems.rootLevel
    }
  },
  /* Project */
  {
    path: 'project',
    loadChildren: loadProjectScreenRoutes
  },
  /* Requirement */
  {
    path: 'project/:projectId/requirement',
    loadChildren: loadRequirementScreenRoutes
  },
  /* Default Route */
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  /* If not Found - Redirect to default */
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
