
import { StudentModel } from './../../student/core/student.model';
import { TeacherModel } from './../core/teacher.model';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Inject, Input} from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'cm-teacher-modal-dialog',
  templateUrl: './teacher-modal-dialog.component.html',
  styleUrls: ['./teacher-modal-dialog.component.css']
})
export class TeacherModalDialogComponent implements OnInit  {
  studentForm: FormGroup;
  teacherForm: FormGroup;
  teacher: TeacherModel;
  student: StudentModel;
  @Input() naziv: string;
  

  

constructor(
  public dialogRef: MatDialogRef<TeacherModalDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data
) { 

  this.teacher = (this.data && this.data.teacher) ? this.data.teacher : new TeacherModel; 


}

ngOnInit() {
  
  this.createTeacherForm();
 
}


private createTeacherForm() {

  this.teacherForm = new FormGroup({
    first_name: new FormControl(this.teacher.first_name, Validators.required),
    
    last_name: new FormControl(this.teacher.last_name, Validators.required)
  });
  console.log('kreiran teacher form');

}

private createStudentForm() {
  
  this.studentForm = new FormGroup({
    full_name: new FormControl(this.student.full_name, Validators.required),
    
    email: new FormControl(this.student.email, Validators.required)
  });
  console.log('kreiran student form');


}

}
