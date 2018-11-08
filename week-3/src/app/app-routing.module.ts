import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './full-layout/full-layout.component';
import { CourseComponent } from './course/course.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'student',
        component: StudentListComponent
      },
      {
        path: 'teacher',
        component: TeacherListComponent
      }
    ]
  }
];

@NgModule({
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)
 ],
 exports: [
   RouterModule
 ]
})

export class AppRoutingModule {}
