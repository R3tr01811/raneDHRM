import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {DeptComponent} from "./dept/dept.component";

const routes: Routes = [
  {
    path:"company",
    component:CompanyComponent
  },
  {
    path:"dept",
    component:DeptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
