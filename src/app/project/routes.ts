import { BudgetComponent } from './budget/budget.component';
import { WorkplanComponent } from './workplan/workplan.component';
import { Routes } from '@angular/router';

import { TestScenariosComponent } from './test-scenarios/test-scenarios.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { sidebarMenuItems } from './../sidebar-menu-items';
import { AttachmentsComponent } from './attachments/attachments.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { IssuesComponent } from './issues/issues.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectComponent } from './project.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SnapshotProjectInfoComponent } from './snapshot-project-info/snapshot-project-info.component';
import { SnapshotStatusHistoryComponent } from './snapshot-status-history/snapshot-status-history.component';
import { TraceabilityComponent } from './traceability/traceability.component';
import { TeamComponent } from './team/team.component';

export const projectRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateProjectComponent,
        data: {
          title: 'Create Project',
          leftSidebarMenuItems: sidebarMenuItems.rootLevel
        }
      },
      {
        path: ':id',
        component: ProjectComponent,
        data: {
          leftSidebarMenuItems: sidebarMenuItems.projectLevel
        },
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          },
          {
            path: 'overview',
            component: ProjectOverviewComponent
          },
          {
            path: 'snapshot',
            children: [
              {
                path: '',
                redirectTo: 'project-info',
                pathMatch: 'full'
              },
              // {
              //   path: 'current-status',
              //   component: SnapshotCurrentStatusComponent
              // },
              {
                path: 'status-history',
                component: SnapshotStatusHistoryComponent
              },
              {
                path: 'project-info',
                component: SnapshotProjectInfoComponent
              }
            ]
          },
          {
            path: 'requirements',
            component: RequirementsComponent
          },
          {
            path: 'solutions',
            component: SolutionsComponent
          },
          {
            path: 'test-scenarios',
            component: TestScenariosComponent
          },
          {
            path: 'issues',
            component: IssuesComponent
          },
          {
            path: 'attachments',
            component: AttachmentsComponent
          },
          {
            path: 'workplan',
            component: WorkplanComponent
          },
          {
            path: 'traceability',
            component: TraceabilityComponent
          },
          {
            path: 'team',
            component: TeamComponent
          },
          {
            path: 'budget',
            component: BudgetComponent
          }
        ]
      }
    ]
  }
];
