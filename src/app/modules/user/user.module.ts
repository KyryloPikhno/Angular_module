import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from "./service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
