import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from "./home/body/body.component";
import {LoginComponent} from "./log-in/login/login.component";
import {DetailComponent} from "./home/detail/detail.component";
import {ListSearchComponent} from "./list-search/list-search/list-search.component";
import {CartComponent} from "./cart/cart/cart.component";
import {InfoComponent} from "./info/info/info.component";
import {HistoryComponent} from "./history/history.component";


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'getListSearchResults', component: ListSearchComponent},
  {path: 'cart', component: CartComponent},
  {path: 'info', component: InfoComponent},
  {path: 'history/:id', component: HistoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
