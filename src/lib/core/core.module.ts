import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaunchAppComponent } from '../components/launch-app/launch-app.component';
import { SharedModule } from '../shared/shared.module';
import { TreeModule } from '../components/tree/tree.module';
import { FolderModule } from '../components/folder-explorer/folder.module';
import { StorageService } from './services/storage.service';
import { FileService } from './services/file.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TreeModule,
    FolderModule
  ],
  declarations: [
    LaunchAppComponent
  ],
  exports: [
    LaunchAppComponent
  ],
  providers: [StorageService, FileService]
})
export class CoreModule {

  constructor() {}

}
