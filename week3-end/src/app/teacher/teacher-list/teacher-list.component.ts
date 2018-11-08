import { HeaderComponent } from './../../share/header/header.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TeacherService } from '../core/teacher.service';
import { TeacherModel } from '../core/teacher.model';

@Component({
  selector: 'cm-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent extends HeaderComponent implements OnInit {

  teachers: TeacherModel[];
  tnaslov: string="Teachers";
  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private teacherService: TeacherService
  ) { super()}

  ngOnInit() {
    this.loadTeachers();
    
  }

  private async loadTeachers() {
    this.teachers = await this.teacherService.getAllTeachers();
    this.setDataSource(this.teachers);
  }

  private setDataSource(teachers) {
    this.dataSource = new MatTableDataSource(teachers);
  }

  addTeacher() {
    this.teachers.push({ id: 4, first_name: 'Hank',last_name: 'Johnson' , full_name: 'Hank Johnson' });
    this.loadTeachers();
  }
  remTeacher() {
    this.teachers.pop();
    this.loadTeachers();
  }
}
