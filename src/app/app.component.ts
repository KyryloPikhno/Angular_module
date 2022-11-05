import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  constructor(private router:Router, private dialog:MatDialog) {
  }

  ngOnInit():void {
    this.router.events.subscribe(()=>{
        this.dialog.closeAll()
    })
  }
}
