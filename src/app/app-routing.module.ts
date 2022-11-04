import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';

import {MainLayoutComponent} from "./layouts";


const routes = [
  {
    path:'', component: MainLayoutComponent, children:[

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
