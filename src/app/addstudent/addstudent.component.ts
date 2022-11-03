import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { Student } from '../student';
import {NgserviceService} from '../ngservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  student = new Student();
  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

addStudentformsubmit()
{
this._service.addStudentToRemote(this.student).subscribe
(
  data =>{
    console.log("Data added successfully");
    this._route.navigate(['studentlist']);
  },
  error =>console.log("Error")
)
}
signUp(){
  this._route.navigate(['/login']);
}

  gotolist() {
    this._route.navigate(['studentlist']);
  }

}
