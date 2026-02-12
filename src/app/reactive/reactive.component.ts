import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  fbg
  constructor(private fb:FormBuilder){
this.fbg=this.fb.group({
namefb:["",[Validators.required,Validators.maxLength(4)]],
pwdfb:["",[Validators.required,Validators.maxLength(4)]]
})
  }
name= new FormControl('gghghg',Validators.required);
pwd=new FormControl('',Validators.minLength(3));
showFormControle(){
  console.log(this.name)
}

fg=new FormGroup(
  {
    namefg:new FormControl('',[Validators.required,Validators.minLength(3)]),
    pwdfg:new FormControl('')
  }
)
showFormfg(){
  console.log(this.fg)
}
showValue(){
  console.log(this.fbg.value)
}
}
