import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.css']
})
export class CreateFolderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <CreateFolderComponent>) { }

  ngOnInit() {
  }
  onNoClick (): void {
    this .dialogRef.close ();
 }
}
