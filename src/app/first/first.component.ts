import { Component,OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  constructor(){
    console.log('cons')
  }
  ngOnInit(){
console.log('oninit')
  }
klass="esprim"
showMsg(){
  alert('bonjour')
}
quantity=0;
kolor="pink"
getColor(){
  if (this.quantity>10){
    return 'green'
  }else return 'red'
}
users:User[]=[
  {"id":1,"name":'flen ben flen',"age":13},
  {"id":2,"name":'flen ben flen',"age":23},
  {"id":3,"name":'flen ben flen',"age":33}
]
}
