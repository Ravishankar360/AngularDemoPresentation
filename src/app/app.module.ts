import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { EmployeregisterComponent } from './employeregister/employeregister.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    AddstudentComponent,
    ViewstudentComponent,
    UserloginComponent,
    EditstudentComponent,
    EmployeregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
