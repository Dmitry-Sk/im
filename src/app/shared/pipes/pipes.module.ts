import { NgModule, ModuleWithProviders } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HtmlToPlanTextPipe } from './html-to-plan-text/html-to-plan-text';
import { SplitCamelCasePipe } from './split-camel-case/split-camel-case';
import { FormatDatePipe } from './format-date/format-date';

@NgModule({
  declarations: [HtmlToPlanTextPipe, SplitCamelCasePipe, FormatDatePipe],
  imports: [],
  exports: [HtmlToPlanTextPipe, SplitCamelCasePipe, FormatDatePipe]
})
export class PipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesModule,
      providers: [DatePipe]
    };
  }
}
