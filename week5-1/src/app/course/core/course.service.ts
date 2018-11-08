import { CourseModel } from './course.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCourses(): Observable<any> {
   return this.http.get(environment.API_URL + 'courses');
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get(environment.API_URL + 'courses/' + id);
  }

  createCourse(course: CourseModel){
    return this.http.post(environment.API_URL + 'courses', course);
  }

  deleteCourse(id: number) {
    return this.http.delete(environment.API_URL + 'courses/' + id);
  }

}
