import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Component, OnInit } from '@angular/core';

import {CarService} from "../../services";
import {ICar} from "../../interfaces";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars:ICar[]
  form:FormGroup
  updateCar:ICar|null

  constructor(private carService:CarService) {
    this._initForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _initForm():void{
    this.form = new FormGroup({
      model: new FormControl('BMW', [Validators.required]),
      price: new FormControl(2000, [Validators.min(0), Validators.max(10000000)]),
      year: new FormControl(1997, [Validators.min(1990), Validators.max(new Date().getFullYear())])
    })
  }

  save():void{
    // console.log(this.form);
    if(!this.updateCar){
        this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
      })
    }else {
        this.carService.updateById(this.updateCar.id, this.form.value).subscribe(value => {
        const car = this.cars.find(car => car.id === this.updateCar?.id)
        Object.assign(car!, value)
        this.updateCar = null
      })
    }
    this.form.reset()
  }

  lift(car: ICar) {
    this.updateCar = car
    this.form.setValue({
      model:car.model,
      price:car.price,
      year:car.year
    })
  }

  deleteById(id: number) {
    this.carService.delateById(id).subscribe(() =>{
      const index = this.cars.findIndex(car => car.id === id)
      this.cars.splice(index,1)
    })
  }
}










