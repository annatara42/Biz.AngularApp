import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { FolderExplorerComponent } from '../folder-explorer/folder-explorer.component';

import { NewFolderDialogComponent } from './modals/newFolderDialog/newFolderDialog.component';
import { RenameDialogComponent } from './modals/renameDialog/renameDialog.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    FolderExplorerComponent,
    NewFolderDialogComponent,
    RenameDialogComponent
  ],
  exports: [
    FolderExplorerComponent
  ],
  entryComponents: [NewFolderDialogComponent, RenameDialogComponent],
  providers: []
})
export class FolderModule {

  constructor() {
  }

}
