import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./home/body/body.component";
import {LoginComponent} from "./log-in/login/login.component";



const routes: Routes = [
  {path: '',component: BodyComponent},
  {path: 'login',component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
