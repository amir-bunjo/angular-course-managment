import { AlertService } from './../alert/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'cm-delete-modal-dialog',
  templateUrl: './delete-modal-dialog.component.html',
  styleUrls: ['./delete-modal-dialog.component.css']
})
export class DeleteModalDialogComponent implements OnInit {

  
  deleteForm: FormGroup;
    
    

    

  constructor(
    private alert: AlertService,
    public dialogRef: MatDialogRef<DeleteModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {  }

  ngOnInit() {
  
  }

  yes(){

     this.alert.success( `Uspjesno ste obrisali `);
  }

}