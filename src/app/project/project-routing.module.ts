import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { projectRoutes } from './routes';

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
