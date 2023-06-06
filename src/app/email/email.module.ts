import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { emailRoute } from './email.routing';
//Core Pages Layout Components
import { SharedModule } from '@pages/components/shared.module';

import { QuillModule } from 'ngx-quill';
import { pgTagModule } from '@pages/components/tag/tag.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EmailListComponent } from './list/list.component';
import { ComposeComponent } from './compose/compose.component';
import { EmailService } from './email.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    QuillModule.forRoot(),
    pgTagModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(emailRoute),
    BsDropdownModule.forRoot()
  ],
  declarations: [EmailListComponent, ComposeComponent],
  providers: [EmailService]
})
export class EmailModule {}
