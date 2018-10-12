import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})


export class BookdetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public bookDetailsForm: FormGroup) { }



  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

}

