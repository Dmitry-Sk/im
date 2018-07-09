import { TinymceModule } from 'angular2-tinymce';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SharedModule } from '../shared/shared.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { BrowseTestScenariosModalComponent } from './shared/modals/browse-test-scenarios-modal/browse-test-scenarios-modal.component';
import { TestScenarioItemRendererComponent } from './shared/test-scenario-item-renderer/test-scenario-item-renderer.component';
import { TestScenarioResource } from './shared/test-scenario.resource';
import { TestScenarioService } from './shared/test-scenario.service';
import { EditTestScenarioModalComponent } from './shared/modals/edit-test-scenario-modal/edit-test-scenario-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    SharedModule,
    InfiniteScrollModule,
    AgGridModule.withComponents([]),
    NgSelectModule,
    TinymceModule.withConfig({
      menubar: false,
      statusbar: false
    })
  ],
  exports: [TestScenarioItemRendererComponent],
  declarations: [
    TestScenarioItemRendererComponent,
    BrowseTestScenariosModalComponent,
    EditTestScenarioModalComponent
  ],
  providers: [TestScenarioResource, TestScenarioService],
  entryComponents: [
    BrowseTestScenariosModalComponent,
    EditTestScenarioModalComponent
  ]
})
export class TestScenarioModule {}
