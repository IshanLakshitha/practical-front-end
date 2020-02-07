import { Component, OnInit } from '@angular/core';
import { AddStudentService } from "../../service/add-student.service";
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  allStudents: Response;
  showDialogEditName: string = "Edit Student";
  isEditModelDisplay: boolean;
  editedStudent = new Student();

  constructor(private studentService: AddStudentService) { }

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudents().subscribe(
      data => {
        this.allStudents = data;
      }
    )
  }

  edit_modal(student){
    this.isEditModelDisplay = !this.isEditModelDisplay;
    this.editedStudent = student;
  }

  edit_student(student){
    this.studentService.updateStudent(student.id,student).subscride(
      date => {
        console.log("Student Updated Successfully!");
      }
    )
  }

}
