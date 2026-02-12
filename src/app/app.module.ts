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
import { SigninComponent } from './core/signin/signin.component'
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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
