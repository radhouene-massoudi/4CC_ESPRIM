import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../../../model/event';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrl: './listevent.component.css'
})
export class ListeventComponent {
  ev!:Event[];
constructor(private s:EventService){}
ngOnInit(){
  this.s.Events().subscribe(
    (r)=>{
      console.log(r)
this.ev=r;
    }
  )
}
}
