import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  constructor(private ac:ActivatedRoute){}
  ngOnInit(){
    console.log(this.ac.snapshot.params['idofproduct'])
  }

}
