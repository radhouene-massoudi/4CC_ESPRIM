import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrl: './fetch-user.component.css'
})
export class FetchUserComponent {
  users:any;
constructor(private s:UserService){}
ngOnInit(){
  this.s.getUsers().subscribe(
    (t)=>{
      this.users=t;
     // console.log(t)
    },

  );

}
}
