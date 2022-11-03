import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import {Router} from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students: Array<Student> = [];
  constructor(private _route: Router, private _service: NgserviceService) { }
  ngOnInit(): void {
   
    this.getStudents();
  }

  getStudents() {
    this._service.fetchStudentListFromRemote().subscribe(
      data => this.students = data, error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.students == null)
    {
      return true;
    }
    else { return false; }
  }

  signUp(){
    this._route.navigate(['/login']);
  }

  goToAddStudent() {
    this._route.navigate(['/addstudent']);
  }

  goToUpdateStudent(sid: number) {
    console.log("sid: "+ sid);
    this._route.navigate(['/editstudent', sid]);
  }


  goToViewStudent(sid: number){
    //alert(sid)
    this._route.navigate(['/viewstudent', sid]);

  }

deleteStudent(sid:number) {
    if (confirm('Are you sure ?'))
  return this._service.deleteStudentBdyIdFromRemote(sid).subscribe(
    success =>{
      ("Product deleted succesfully");
      this._route.navigate(["studentlist"]);

    },
    error=> {console.log("Exception occured 2"); this.getStudents()}
   )
  }

}
