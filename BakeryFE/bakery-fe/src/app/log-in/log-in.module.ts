import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  exports: [

  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LogInModule {
}
