import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/model/student';
import { AddStudentService } from "../../service/add-student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentObject = new Student();

  constructor(private studentService : AddStudentService ) { }

  registerStudent(){
    this.studentService.registerStudent(this.studentObject).subscribe(res = >{
      console.log("Student Added Successfully!");
    })
  }

  ngOnInit() {
  }

}
