import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  CommentComponent,
  HeaderComponent,
  CommentsComponent,
  PostsComponent,
  PostComponent,
  UserComponent,
  UsersComponent,
  UserDetailsComponent
} from './components';
import { AppComponent } from './app.component';
import { MainLayautComponent } from './layouts';


const routes:Routes = [
  {
    path: '', component:MainLayautComponent, children:[
        {path:'', redirectTo:'users', pathMatch:'full'},
        {
          path: 'users', component:UsersComponent, children:[
            {path: ':id', component:UserDetailsComponent}
          ]
        },
        {path: 'posts', component:PostsComponent},
        {path: 'comments', component:CommentsComponent}
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HeaderComponent,
    MainLayautComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
