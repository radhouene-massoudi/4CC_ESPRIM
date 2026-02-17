import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseURl='http://localhost:3000/user/'
  constructor(private http:HttpClient) { }
  getUsers(){
return this.http.get(this.baseURl);
  }
  addUser(data:any){
return this.http.post(this.baseURl,data)
  }
  updateUser(data:any,id:any){
return this.http.put(this.baseURl+id,data)
  }
  removeUser(id:any){
    return this.http.delete('http://localhost:3000/user/'+id)

  }
   fetchUserById(id:any){
    return this.http.get('http://localhost:3000/user/'+id)

  }
}
