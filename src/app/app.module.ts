import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header/header.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
