import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <CreateTypeComponent>) { }

  ngOnInit() {
  }
  onNoClick (): void {
    this .dialogRef.close ();
 }
}
