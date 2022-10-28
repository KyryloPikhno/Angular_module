import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommentComponent, CommentsComponent, PostsComponent, PostComponent, UserComponent, UsersComponent} from './components';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
