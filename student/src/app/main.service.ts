import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  isMinimized:boolean= false;
  toggle(){
    this.isMinimized = !this.isMinimized;}
}
