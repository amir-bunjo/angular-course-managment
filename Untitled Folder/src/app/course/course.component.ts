import { Component, OnInit } from '@angular/core';

import { CourseService } from './core/course.service';
import { CourseModel } from './core/course.model';

@Component({
  selector: 'cm-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: CourseModel[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courses = this.courseService.getAllCourses();
  }

}
