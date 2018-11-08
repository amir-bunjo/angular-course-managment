import { DeleteModalDialogComponent } from './../../shared/delete-modal-dialog/delete-modal-dialog.component';
import { StudentModalDialogComponent } from './../student-modal-dialog/student-modal-dialog.component';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';



@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];
  title = 'Students';
  studentDialog: StudentModalDialogComponent;

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog

  ) { }

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

  addNewStudent(){

    this.dialog.open(StudentModalDialogComponent)
      .afterClosed()
      .subscribe(result => console.log(result));
    }

  updateStudent(student: StudentModel) {
    
      this.dialog.open(StudentModalDialogComponent, {
        data: { student }
      })
        .afterClosed()
        .subscribe(result => console.log(result));
      
    }

 deleteStudent(student: StudentModel) {
    
      this.dialog.open(DeleteModalDialogComponent, {
        data: { student }
      })
        .afterClosed()
        .subscribe(result => console.log(result));
      
    }


    

  

}


