import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient } from '@angular/common/http';
import {Student} from "../model/student";


@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private http: HttpClient) { }

  registerStudent(student){
    return this.http.post('http://localhost:8080/api/addStudent'+student,{
      observe:'response',
    }).subscribe(Response);
  }

  getAllStudents(){
    return this.http.get('http://localhost:8080/api/all',{
      observe:'response',
    }).subscribe(Response);
  }

  updateStudent(id,student){
    return this.http.put('http://localhost:8080/api/updateStudent/'+id,student,{
      observe:'response',
    }).subscribe(Response);
  }
}


