import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MainLayoutComponent} from "./layouts";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {CarsComponent} from "./components/cars/cars.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cars', component: CarsComponent}
    ]
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
