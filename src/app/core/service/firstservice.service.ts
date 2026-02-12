import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {
tab=['a','b']
  constructor() { }
  addToTab(){
    this.tab.push('e')
  }
  showTab(){
    console.log(this.tab)
  }
}
