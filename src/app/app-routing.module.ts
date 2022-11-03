import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { EmployeregisterComponent } from './employeregister/employeregister.component';

const routes: Routes = [
  {path: '', component: UserloginComponent},
  {path: 'addstudent', component: AddstudentComponent},
  {path: 'studentlist', component: StudentlistComponent},
  {path: 'viewstudent', component: ViewstudentComponent},
  {path: 'viewstudent/:id', component: ViewstudentComponent},
  {path: 'editstudent/:id', component:EditstudentComponent},
  {path: 'login', component:UserloginComponent},
  {path: 'empRegister', component:EmployeregisterComponent},

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
