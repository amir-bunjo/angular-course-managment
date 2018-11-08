import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../core/course.service';
import { CourseModel } from '../core/course.model';

@Component({
  selector: 'cm-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: CourseModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.getCourse(id);
}

private getCourse(id: number){
  this.course = this.courseService.getCourseById(id);
  console.log(this.course);
}