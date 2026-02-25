import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionevenementRoutingModule } from './gestionevenement-routing.module';
import { AddeventComponent } from './addevent/addevent.component';
import { ListeventComponent } from './listevent/listevent.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AddeventComponent,
    ListeventComponent
  ],
  imports: [
    CommonModule,
    GestionevenementRoutingModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class GestionevenementModule { }
