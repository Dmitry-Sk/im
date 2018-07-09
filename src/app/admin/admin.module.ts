import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NG_SELECT_DEFAULT_CONFIG, NgSelectModule } from '@ng-select/ng-select';
import { TinymceModule } from 'angular2-tinymce';

import { PipesModule } from '../shared/pipes/pipes.module';
import { CatalogComponent } from './catalog/catalog.component';
import { DesignTypesComponent } from './design-types/design-types.component';
import { GroupsComponent } from './groups/groups.component';
import { CatalogResource } from './shared/catalog/catalog.resource';
import { CatlogService } from './shared/catalog/catalog.service';
import { DesignTypesResource } from './shared/design-types/design-types.resource';
import { DesignTypesService } from './shared/design-types/design-types.service';
import { GroupsResource } from './shared/groups/groups.resource';
import { GroupsService } from './shared/groups/groups.service';
import { EditItemCustomModalComponent } from './shared/modals/edit-item-custom-modal/edit-item-custom-modal.component';
import { SourcesResource } from './shared/sources/sources.resource';
import { SourcesService } from './shared/sources/sources.service';
import { UserDefinedFieldsResource } from './shared/user-defined-fields/user-defined-fields.resource';
import { UserDefinedFieldService } from './shared/user-defined-fields/user-defined-fields.service';
import { UserTypesResource } from './shared/user-types/user-types.resource';
import { UserTypesService } from './shared/user-types/user-types.service';
import { WorkplanSettingsResource } from './shared/workplan-settings/workplan-settings.resource';
import { WorkplanSettingsService } from './shared/workplan-settings/workplan-settings.service';
import { SourcesComponent } from './sources/sources.component';
import { UserDefinedFieldsComponent } from './user-defined-fields/user-defined-fields.component';
import { UserTypesComponent } from './user-types/user-types.component';
import { WorkplanSettingsComponent } from './workplan-settings/workplan-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    NgSelectModule,
    TinymceModule.withConfig({
      menubar: false,
      statusbar: false
    })
  ],
  declarations: [
    WorkplanSettingsComponent,
    SourcesComponent,
    DesignTypesComponent,
    GroupsComponent,
    UserDefinedFieldsComponent,
    UserTypesComponent,
    CatalogComponent,
    EditItemCustomModalComponent
  ],
  providers: [
    WorkplanSettingsResource,
    WorkplanSettingsService,
    GroupsResource,
    GroupsService,
    SourcesResource,
    SourcesService,
    DesignTypesResource,
    DesignTypesService,
    UserTypesResource,
    UserTypesService,
    CatalogResource,
    CatlogService,
    UserDefinedFieldsResource,
    UserDefinedFieldService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: '-- Not found --'
      }
    }
  ],
  entryComponents: [EditItemCustomModalComponent]
})
export class AdminModule {}
