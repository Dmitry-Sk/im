import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { DraggableDirective } from './draggable.directive';
import { GridWrapperDirective } from './grid-wrapper.directive';
import { ItemRendererComponent } from './item-renderer/item-renderer.component';
import { ItemsSearchBarComponent } from './items-search-bar/items-search-bar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { ConfirmationDangerModalComponent } from './modals/confirmation-danger-modal/confirmation-danger-modal.component';
import { ConfirmationWarningModalComponent } from './modals/confirmation-warning-modal/confirmation-warning-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PipesModule } from './pipes/pipes.module';
import { SortSelectorComponent } from './sort-selector/sort-selector.component';
import { ViewModeToggleComponent } from './view-mode-toggle/view-mode-toggle.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, PipesModule],
  exports: [
    NavbarComponent,
    LeftSidebarComponent,
    ContentComponent,
    GridWrapperDirective,
    SortSelectorComponent,
    ItemsSearchBarComponent,
    ViewModeToggleComponent,
    DraggableDirective
  ],
  declarations: [
    NavbarComponent,
    LeftSidebarComponent,
    ContentComponent,
    PerfectScrollbarDirective,
    ConfirmationWarningModalComponent,
    GridWrapperDirective,
    SortSelectorComponent,
    ItemsSearchBarComponent,
    ViewModeToggleComponent,
    ItemRendererComponent,
    ConfirmationDangerModalComponent,
    DraggableDirective
  ],
  entryComponents: [
    ConfirmationWarningModalComponent,
    ConfirmationDangerModalComponent
  ]
})
export class SharedModule {}
