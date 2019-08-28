import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [UserdetailComponent, UserHeaderComponent, UserReportComponent, UserEditComponent],
  imports: [
    CommonModule
  ]
})
export class TenantsModule { }
