import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CouldComponent } from './could/could.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ProductComponent } from './product/product.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { SigninComponent } from './core/signin/signin.component';
import { FetchUserComponent } from './core/gestionUser/fetch-user/fetch-user.component';
import { UpdateUserComponent } from './core/gestionUser/update-user/update-user.component';
import { AddUserComponent } from './core/gestionUser/add-user/add-user.component';
import { RemoveUserComponent } from './core/gestionUser/remove-user/remove-user.component'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TestComponent,
    CouldComponent,
    NotfoundComponent,
    LoginComponent,
    DetailComponent,
    StudentComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    ProductComponent,
    ReactiveComponent,
    SigninComponent,
    FetchUserComponent,
    UpdateUserComponent,
    AddUserComponent,
    RemoveUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
