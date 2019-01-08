import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.css']
})
export class EditFileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <EditFileComponent>) { }

  ngOnInit() {
  }
  onNoClick (): void {
    this .dialogRef.close ();
 }
}
