import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrl: './addevent.component.css'
})
export class AddeventComponent {
  fg:FormGroup
  constructor(private s:EventService,private fb:FormBuilder){
    this.fg=this.fb.group(
      {
      name:[],
      desc:[],
      cat:['test'],  
      }
    )
  }


  addEvent(){
    this.s.addEvent(this.fg.value).subscribe(
      ()=>{
       console.log('added') 
      }
    )
  }

}
