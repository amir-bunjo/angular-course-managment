import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseModel } from '../core/course.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cm-course-modal-dialog',
  templateUrl: './course-modal-dialog.component.html',
  styleUrls: ['./course-modal-dialog.component.css']
})
export class CourseModalDialogComponent implements OnInit {

  courseForm: FormGroup;
  course: CourseModel;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<CourseModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.course = (this.data && this.data.course) ? this.data.course : new CourseModel();
   }

  ngOnInit() {
    this.createCourseForm();
    this.title = this.course.id ? 'Edit Course' : 'Add New Course';
  }

  private createCourseForm() {
    this.courseForm = new FormGroup({
      name: new FormControl(this.course.name, Validators.required),
      description: new FormControl(this.course.description),
      location: new FormControl(this.course.location, Validators.required)
    });
  }

}
