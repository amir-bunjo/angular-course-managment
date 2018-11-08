
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { AlertService } from '../../shared/alert/alert.service';


@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: CourseModel[];
  title = 'Courses';
  okidac: boolean =true;

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'name', 'location', 'actions'];
  dataSource: MatTableDataSource<CourseModel>;
  // END DATA TABLE CONFIG

  constructor(
    private courseService: CourseService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  addNewCourse() {
    this.alert.success('Add new course');
  }

  private async loadCourses() {
    this.courses = await this.courseService.getAllCourses();
    this.setDataSource(this.courses);
  }

  private setDataSource(courses: CourseModel[]) {
    this.dataSource = new MatTableDataSource(courses);
  }

  updateCourse(course: CourseModel){
    this.alert.error(`Update ${course.name}`);
    
  }
  deleteCourse(course: CourseModel){
    this.alert.warning( 'Delete ' + course.name);
  }
}
