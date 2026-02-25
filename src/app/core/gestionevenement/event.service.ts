import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../model/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  Events():Observable<Event[]>{
   return this.http.get<Event[]>("http://localhost:3000/event")
  }
  addEvent(event:Event):Observable<Event>{
return this.http.post<Event>("http://localhost:3000/event",event)
  }
}
