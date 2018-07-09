import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { ContextService } from './context.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService, ContextService, GlobalErrorHandlerService]
})
export class CoreModule { }
