import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeFoldersComponent } from './tree-folders/tree-folders.component';
import { MatTreeModule, MatIconModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { FoldersComponent } from './folders/folders.component';
import { CurrentFolderComponent } from './current-folder/current-folder.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { CreateFolderComponent } from './modals/create-folder/create-folder.component';
import { CreateMetaComponent } from './modals/create-meta/create-meta.component';
import { EditFileComponent } from './modals/edit-file/edit-file.component';
import { CreateTypeComponent } from './modals/create-type/create-type.component';
import { EditMetaComponent } from './modals/edit-meta/edit-meta.component';
import { MoveFolderComponent } from './modals/move-folder/move-folder.component';
@NgModule({
  declarations: [
    AppComponent,
    TreeFoldersComponent,
    FoldersComponent,
    CurrentFolderComponent,
    ThirdCompComponent,
    ModalDeleteComponent,
    CreateFolderComponent,
    CreateMetaComponent,
    EditFileComponent,
    CreateTypeComponent,
    EditMetaComponent,
    MoveFolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDeleteComponent,
    CreateFolderComponent,
    CreateMetaComponent,
    EditFileComponent,
    CreateTypeComponent,
    EditMetaComponent,
    MoveFolderComponent
  ]
})
export class AppModule { }
