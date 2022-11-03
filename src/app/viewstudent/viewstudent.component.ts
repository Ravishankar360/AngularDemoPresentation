import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-viewcstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  students = new Student();
 
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let sid = this._activatedRouter.snapshot.paramMap.get('sid');
    console.log(sid);
    var a: number= +sid;
    alert(sid);
   this._service.featchStudentByIdFromRemote(a).subscribe(
    data=>{
      console.log("data received");
      this.students = data;
    },
      error => console.log("Exception Occured")
    )
  }
  gotolist() {
    this._route.navigate(['studentlist']);
  }
}
