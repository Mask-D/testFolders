import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-meta',
  templateUrl: './edit-meta.component.html',
  styleUrls: ['./edit-meta.component.css']
})
export class EditMetaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <EditMetaComponent>) { }

  ngOnInit() {
  }
  onNoClick (): void {
    this .dialogRef.close ();
 }
}
