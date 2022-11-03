import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  student = new Student();
  constructor(private _route: Router,private _service: NgserviceService) { }
  ngOnInit(): void {
  }

  updateStudentformsubmit(){
    this._service.updateStudentToRemote(this.student).subscribe
   (
  data =>{
    console.log("Data Updated successfully");
    this._route.navigate(['studentlist']);
  },
  error =>console.log("Error")
  )

  }

  gotolist() {
    this._route.navigate(['studentlist']);
  }

  signUp(){
    this._route.navigate(['/login']);
  }

}
