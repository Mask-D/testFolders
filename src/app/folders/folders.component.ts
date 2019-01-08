import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { CreateFolderComponent } from '../modals/create-folder/create-folder.component';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  modalDelete() {
    this.dialog.open(ModalDeleteComponent);
  }

  modalCreateFolder() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '30%';
    this.dialog.open(CreateFolderComponent, dialogConfig);
  }

}
