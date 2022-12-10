import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { TodoComponent } from './todo.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    TodoComponent
  ],
    imports: [
        CommonModule,
        ListRoutingModule,
        FontAwesomeModule,
        MatIconModule,
        SharedModule
    ]
})
export class ListModule { }
