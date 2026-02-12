import { Component,OnInit } from '@angular/core';
import { User } from '../model/user';
import { FirstserviceService } from '../core/service/firstservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
  providers:[FirstserviceService]
})
export class FirstComponent implements OnInit{
  constructor(private s: FirstserviceService){
    console.log('cons')
  }
  ngOnInit(){
console.log('oninit')
this.s.showTab()
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
