import {ActivatedRoute, Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services'
import {IUser} from '../../Interfaces'


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:IUser

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id})=>{
       this.user = this.router.getCurrentNavigation()?.extras.state?.[`user`]

       if(!this.user){
          this.userService.getById(id).subscribe(value => this.user = value)
       }
    })
  }

  ngOnInit(): void {
  }

}
