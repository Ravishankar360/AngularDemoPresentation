import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-employeregister',
  templateUrl: './employeregister.component.html',
  styleUrls: ['./employeregister.component.css']
})
export class EmployeregisterComponent implements OnInit {
  user: User= new User();
  constructor(private ngService: NgserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  employeeRegistration(){
    console.log(this.user);
    this.ngService.employeeRegistration(this.user).subscribe(data=>{
      alert("User Created Successfully");
      this.router.navigate(["login"]);
    },error=>alert("Something went wrong"));

  }

  signUp(){
    this.router.navigate(['/login']);
  }

}
