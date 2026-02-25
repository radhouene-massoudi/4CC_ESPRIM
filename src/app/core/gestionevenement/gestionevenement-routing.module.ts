import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { ListeventComponent } from './listevent/listevent.component';

const routes: Routes = [
  {path:'addevent',component:AddeventComponent},
  {path:'list',component:ListeventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionevenementRoutingModule { }
