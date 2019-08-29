import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenantsRoutingModule } from './tenants-routing-modul';
import { TenantsComponent } from './tenants.component';

@NgModule({
  declarations: [UserdetailComponent, UserHeaderComponent, UserReportComponent, TenantsComponent, UserEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TenantsRoutingModule
  ]
})
export class TenantsModule { }
