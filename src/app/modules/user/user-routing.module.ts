import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersComponent} from "./components/users/users.component";
import {UsersResolver} from "./service/resolvers/users.resolver";
import {UserResolver} from "./service/resolvers/user.resolver";


const routes: Routes = [
  {
    path:'', component: UsersComponent, resolve:{users: UsersResolver}, children:[
      {path:':id', component: UserDetailsComponent, resolve:{user: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
