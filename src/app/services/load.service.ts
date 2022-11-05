import {BehaviorSubject, Observable} from "rxjs";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoadService {
  private _isLoading = new BehaviorSubject<boolean>(false)

  constructor() {
  }

  startLoading():void{
    this._isLoading.next(true)
  }

  endLoading():void{
    this._isLoading.next(false)
  }

  isLoading():Observable<boolean>{
    return this._isLoading.asObservable()
  }
}
