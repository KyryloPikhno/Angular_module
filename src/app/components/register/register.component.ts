import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {RegisterFormComponent} from "../register-form/register-form.component";


@Component({
  selector: 'app-register',
  template: ''
})
export class RegisterComponent implements OnInit {


  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(RegisterFormComponent, {
      disableClose: true,
      enterAnimationDuration: '800ms',
      exitAnimationDuration: '800ms',
      hasBackdrop: false
    });
  }
}
