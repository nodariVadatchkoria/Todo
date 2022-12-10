import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    CreateComponent
  ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        SharedModule
    ]
})
export class CreateModule { }
