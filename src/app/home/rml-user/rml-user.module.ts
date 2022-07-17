import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmlUserRoutingModule } from './rml-user-routing.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {CompanyComponent} from "./masters/company/company.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {DeptComponent} from "./masters/dept/dept.component";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    CompanyComponent,
    DeptComponent,
  ],
    imports: [
        CommonModule,
        RmlUserRoutingModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule
    ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class RmlUserModule { }
