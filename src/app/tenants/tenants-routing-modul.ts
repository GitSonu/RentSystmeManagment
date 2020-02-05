import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserReportComponent } from './user-report/user-report.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TenantsComponent } from './tenants.component';
import { UserCreateComponent } from './user-create/user-create.component';


const routes: Routes = [
  {
    path: "",
    component: TenantsComponent,
    children: [
      {
        path: "createUser",
        component: UserCreateComponent,
      },
      {
        path: "userDetails",
        component: UserdetailComponent,
      },
      {
        path: "report",
        component: UserReportComponent,
      },
      {
        path: "edituser/:id",
        component: UserEditComponent,
      },
      {
        path: "",
        redirectTo: "",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }
