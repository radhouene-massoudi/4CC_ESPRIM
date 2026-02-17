import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
constructor(private s:UserService
  ,private router:Router,
private ac:ActivatedRoute
){}
fg=new FormGroup({
  name:new FormControl(''),
  pwd:new FormControl(''),
})
ngOnInit(){
  this.s.fetchUserById(this.ac.snapshot.params['id']).subscribe(
    (result)=>{
      this.fg.patchValue(result)
    }
  )
}
updateUser(){
this.s.updateUser(this.fg.value,this.ac.snapshot.params['id']).subscribe(
  ()=>{
    this.router.navigate(['/fetch'])
  },
  (error)=>{
    console.log(error.status)
  }
)
}
}
