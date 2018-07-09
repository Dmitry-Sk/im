import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { ToasterModule } from 'angular5-toaster';
import { ModalModule } from 'ngx-bootstrap';

import { ActivityModule } from './activity/activity.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchivesModule } from './archives/archives.module';
import { AttachmentModule } from './attachment/attachment.module';
import { AuthInterceptor } from './core/auth.interceptor';
import { AuthService } from './core/auth.service';
import { CoreModule } from './core/core.module';
import { GlobalErrorHandlerService } from './core/global-error-handler.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { IssueModule } from './issue/issue.module';
import { LibraryModule } from './library/library.module';
import { ProjectModule } from './project/project.module';
import { ReportingModule } from './reporting/reporting.module';
import { RequirementModule } from './requirement/requirement.module';
import { ReviewModule } from './review/review.module';
import { SecurityModule } from './security/security.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { SharedModule } from './shared/shared.module';
import { SolutionModule } from './solution/solution.module';
import { TestScenarioModule } from './test-scenario/test-scenario.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ResourceModule.forRoot(),
    ModalModule.forRoot(),
    ToasterModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    PipesModule,
    DashboardModule,
    ReportingModule,
    ArchivesModule,
    AdminModule,
    SecurityModule,
    LibraryModule,
    ProjectModule,
    RequirementModule,
    AttachmentModule,
    SolutionModule,
    TestScenarioModule,
    IssueModule,
    ActivityModule,
    ReviewModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
