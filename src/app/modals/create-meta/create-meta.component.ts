import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-meta',
  templateUrl: './create-meta.component.html',
  styleUrls: ['./create-meta.component.css']
})
export class CreateMetaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <CreateMetaComponent>) { }

  ngOnInit() {
  }
  onNoClick (): void {
    this .dialogRef.close ();
 }
}
