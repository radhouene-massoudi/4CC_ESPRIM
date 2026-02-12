import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ProductComponent } from './product/product.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { SigninComponent } from './core/signin/signin.component';

const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'r',component:ReactiveComponent},
{path:'product',component:ProductComponent},
  //{path:'',redirectTo:'login',pathMatch:'full'},
{path:'detail/:idofproduct',component:DetailComponent},
{path:'login',component:LoginComponent},
{path:'test',component:TestComponent},
{path:'first',component:FirstComponent},
{path:'student',component:StudentComponent,
children:[
  {path:'add',component:AddstudentComponent}
]
  },
 // {path:'student/add',component:AddstudentComponent},
    {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
