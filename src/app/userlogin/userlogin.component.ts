import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user: User= new User();
  constructor(private ngService: NgserviceService, private router: Router) { }

  ngOnInit(): void {} 

  userlogin(){
    console.log(this.user);
    this.ngService.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully");
      this.router.navigate(["studentlist"]);
    },error=>alert("Please enter correct username and password"));

  }
   

}
