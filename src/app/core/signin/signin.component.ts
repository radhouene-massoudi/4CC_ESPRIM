import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirstserviceService } from '../service/firstservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  fbg;
  tab:any=[];
constructor(private fb:FormBuilder,private s:FirstserviceService){
this.fbg=this.fb.group({
  email:['',[Validators.required,Validators.minLength(3)]],
pwd:['']
})
}
addElementToTab(element:any){
this.tab.push(element)
}
ngOnInit(){
  this.s.addToTab();
  this.s.showTab();
  
}
}
