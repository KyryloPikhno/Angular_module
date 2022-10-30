import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


let routes: Routes =[
  {
    path:'', component: MainLayoutComponent, children:[
      {path:'users', loadChildren:()=>import('./modules/user/user.module').then(value=>value.UserModule)}
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
