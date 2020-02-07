import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from './component/add-student/add-student.component';
import {ViewStudentsComponent} from './component/view-students/view-students.component';


const routes: Routes = [
{path: 'add_student',component: AddStudentComponent},
{path: 'view_students',component: ViewStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
