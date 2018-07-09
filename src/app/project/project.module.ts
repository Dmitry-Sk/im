import { TestScenarioModule } from './../test-scenario/test-scenario.module';
import { SolutionModule } from './../solution/solution.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NG_SELECT_DEFAULT_CONFIG, NgSelectModule } from '@ng-select/ng-select';
import { TinymceModule } from 'angular2-tinymce';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AttachmentModule } from '../attachment/attachment.module';
import { RequirementModule } from '../requirement/requirement.module';
import { SharedModule } from '../shared/shared.module';
import { ReportingModule } from './../reporting/reporting.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { AttachmentsComponent } from './attachments/attachments.component';
import { BudgetComponent } from './budget/budget.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { IssuesComponent } from './issues/issues.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { BudgetResource } from './shared/budget/budget.resource';
import { BudgetService } from './shared/budget/budget.service';
import { AddNewBudgetLineModalComponent } from './shared/modals/add-new-budget-line-modal/add-new-budget-line-modal.component';
import { ChangeProjectManagerModalComponent } from './shared/modals/change-project-manager-modal/change-project-manager-modal.component';
import { EditBudgetLineModalComponent } from './shared/modals/edit-budget-line-modal/edit-budget-line-modal.component';
import { ProjectItemRendererComponent } from './shared/project-item-renderer/project-item-renderer.component';
import { ProjectResource } from './shared/project.resource';
import { ProjectService } from './shared/project.service';
import { SnapshotCurrentStatusComponent } from './snapshot-current-status/snapshot-current-status.component';
import { SnapshotProjectInfoComponent } from './snapshot-project-info/snapshot-project-info.component';
import { SnapshotStatusHistoryComponent } from './snapshot-status-history/snapshot-status-history.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TeamComponent } from './team/team.component';
import { TestScenariosComponent } from './test-scenarios/test-scenarios.component';
import { TraceabilityComponent } from './traceability/traceability.component';
import { WorkplanComponent } from './workplan/workplan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    TinymceModule.withConfig({
      menubar: false,
      statusbar: false
    }),
    InfiniteScrollModule,
    ProjectRoutingModule,
    PipesModule,
    SharedModule,
    AttachmentModule,
    ReportingModule,
    RequirementModule,
    SolutionModule,
    TestScenarioModule
  ],
  exports: [ProjectItemRendererComponent],
  declarations: [
    ProjectOverviewComponent,
    ProjectComponent,
    SnapshotCurrentStatusComponent,
    SnapshotStatusHistoryComponent,
    SnapshotProjectInfoComponent,
    ChangeProjectManagerModalComponent,
    CreateProjectComponent,
    ProjectItemRendererComponent,
    RequirementsComponent,
    SolutionsComponent,
    TestScenariosComponent,
    IssuesComponent,
    AttachmentsComponent,
    WorkplanComponent,
    TraceabilityComponent,
    TeamComponent,
    BudgetComponent,
    AddNewBudgetLineModalComponent,
    EditBudgetLineModalComponent
  ],
  entryComponents: [
    ChangeProjectManagerModalComponent,
    AddNewBudgetLineModalComponent,
    EditBudgetLineModalComponent
  ],
  providers: [
    ProjectService,
    ProjectResource,
    BudgetService,
    BudgetResource,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: '-- Not found --'
      }
    }
  ]
})
export class ProjectModule {}
