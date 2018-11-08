import { HeaderComponent } from 'src/app/share/header/header.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent extends HeaderComponent implements OnInit {

  students: StudentModel[];

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'email'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG
  snaslov: string="Students";
  constructor(
    private studentService: StudentService
  ) { super()}

  ngOnInit() {
    this.loadStudents();
    
  }

  private async loadStudents() {
    this.students = await this.studentService.getAllStudents();
    this.setDataSource(this.students);
  }

  private setDataSource(students) {
    this.dataSource = new MatTableDataSource(students);
  }

  addStudent() {
    this.students.push({ id: 5, first_name: 'Hank',last_name: 'Johnson' , full_name: 'Hank Johnson', email: 'new@gmail.com'});
    this.loadStudents();
  }
  remStudent() {
    this.students.pop();
    this.loadStudents();
  }

}
