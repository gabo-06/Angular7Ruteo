import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { RecentSubmissionsComponent } from './recent-submissions/recent-submissions.component';
import { NewSubmissionComponent } from './new-submission/new-submission.component';

@NgModule({
  imports:
  [
    CommonModule,
    FormRoutingModule
  ],
  declarations:
    [      
      FormComponent,
      RecentSubmissionsComponent,
      NewSubmissionComponent
    ]
})
export class FormModule { }
