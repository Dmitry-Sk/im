import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MyActivitiesComponent } from '../dashboard/my-activities/my-activities.component';
import { MyIssuesComponent } from '../dashboard/my-issues/my-issues.component';
import { MyRequirementsComponent } from '../dashboard/my-requirements/my-requirements.component';
import { MyReviewsComponent } from '../dashboard/my-reviews/my-reviews.component';
import { MySolutionsComponent } from '../dashboard/my-solutions/my-solutions.component';
import { MyTestScenariosComponent } from '../dashboard/my-test-scenarios/my-test-scenarios.component';
import { RequirementModule } from '../requirement/requirement.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { SolutionModule } from '../solution/solution.module';
import { IssueModule } from './../issue/issue.module';
import { ProjectModule } from './../project/project.module';
import { TestScenarioModule } from './../test-scenario/test-scenario.module';
import { DashboardQuickOverviewComponent } from './dashboard-quick-overview/dashboard-quick-overview.component';
import { DashboardComponent } from './dashboard.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

//import { HotTableModule } from '@handsontable/angular';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    AgGridModule.withComponents([]),
    RouterModule,
    SharedModule,
    /*, HotTableModule*/
    PipesModule,
    ProjectModule,
    RequirementModule,
    SolutionModule,
    TestScenarioModule,
    IssueModule
  ],
  declarations: [
    DashboardQuickOverviewComponent,
    MyProjectsComponent,
    MyRequirementsComponent,
    MySolutionsComponent,
    MyTestScenariosComponent,
    MyIssuesComponent,
    MyActivitiesComponent,
    MyReviewsComponent,
    DashboardComponent
  ]
})
export class DashboardModule {}
