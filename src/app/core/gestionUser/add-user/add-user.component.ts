import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
constructor(private s:UserService,private router:Router){}
fg=new FormGroup({
  name:new FormControl(''),
  pwd:new FormControl(''),
})
ajoutUser(d:any){
this.s.addUser(d).subscribe(
  ()=>{
    this.router.navigate(['/fetch'])
  },
  (error)=>{
    console.log(error.status)
  }
)
}
}
