import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../../../Demologin/src/app/user';

class Student {
}

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }
  loginUser(user:User):Observable<Object>{
    console.log(user);
    return this._http.post("http://localhost:8084/user/login",user);
  }

  employeeRegistration(user:User):Observable<Object>{
    console.log(user);
    return this._http.post("http://localhost:8084/user/addUser",user);
  }

  fetchStudentListFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8084/getStudent');
  }
  addStudentToRemote(student: Student): Observable<any>{
    return this._http.post<any>('http://localhost:8084/student',student);
  }
  updateStudentToRemote(student: Student): Observable<any>{
    return this._http.post<any>('http://localhost:8084/student',student);
  }
  deleteStudentBdyIdFromRemote(sid: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8084/student/' + sid);
  }
  featchStudentByIdFromRemote(sid: number): Observable<any> {
    return this._http.get<any>('http://localhost:8084/students/' + sid);
  }
}
