import { TeacherModel } from './../core/teacher.model';
import { DeleteModalDialogComponent } from './../../shared/delete-modal-dialog/delete-modal-dialog.component';
import { TeacherModalDialogComponent } from './../teacher-modal-dialog/teacher-modal-dialog.component';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TeacherService } from '../core/teacher.service';
import { stringify } from 'querystring';


@Component({
  selector: 'cm-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: TeacherModel[];
  title = 'Teachers';
  prekid: boolean=true;

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'actions'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private teacherService: TeacherService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadTeachers();
  }
  
  ngOnDestroy(){
    this.prekid=false;
  }

  private async loadTeachers() {
    this.teachers = await this.teacherService.getAllTeachers();
    this.setDataSource(this.teachers);
  }

  private setDataSource(teachers) {
    this.dataSource = new MatTableDataSource(teachers);
  }

  addNewTeacher(placeHname: string[]){

    this.dialog.open(TeacherModalDialogComponent, {
      data: placeHname 
     } )
      .afterClosed()
      .subscribe(result => console.log(result));

  }
  
  updateTeacher(teacher: TeacherModel) {

    this.dialog.open(TeacherModalDialogComponent, {
      data: { teacher }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
    
  }

  deleteTeacher(teacher: TeacherModel) {
    
    this.dialog.open(DeleteModalDialogComponent, {
      data: { teacher }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
    
  }

}
