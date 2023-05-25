import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import { CartComponent } from './cart/cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search-list/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./home/home.module";
import {LogInModule} from "./log-in/log-in.module";
import {LoginComponent} from "./log-in/login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    HistoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LogInModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
