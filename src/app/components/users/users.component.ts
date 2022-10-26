import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IUser} from "../../Interfaces";  


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  getAllUsers(): void{
}

}
