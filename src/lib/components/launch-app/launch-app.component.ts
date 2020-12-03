import { StorageService } from './../../core/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ModalService } from '../../shared/modal';

import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlertDialogComponent } from '../../shared/alert-dialog/alert-dialog.component';

import { FileElement } from '../folder-explorer/folder';
import { Observable } from 'rxjs';
import { FileService } from '../../core/services/file.service';



@Component({
  selector: 'launch-app',
  templateUrl: './launch-app.component.html',
  styleUrls: ['./launch-app.component.scss'],
})
export class LaunchAppComponent implements OnInit {
  selectedSource: string;
  bodyText: string;
  environmentName = '';
  environmentUrl = 'Debug api';
  constructor(private modalService: ModalService, private dialog: MatDialog,
    private storageService: StorageService, public fileService: FileService) {
    this.environmentName = environment.environmentName;
    this.environmentUrl = environment.apiUrl;
  }
  public fileElements: Observable<FileElement[]>;
  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  openSelection() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'Please Select Storage Location',
        buttonText: {
          cancel: 'Done'
        },
        selectedSource: this.selectedSource
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedSource = result;
    });
  }
  // sources: any = [
  //   {
  //     full: "On Premise",
  //     short: "On Premise"
  //   }];
  // selectedSource: string = "On Premise";
  

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
    console.log(this.storageService.showTasks);

    const folderA = this.fileService.add({ name: 'Folder A', isFolder: true, parent: 'root' });
    this.fileService.add({ name: 'Folder B', isFolder: true, parent: 'root' });
    this.fileService.add({ name: 'Folder C', isFolder: true, parent: folderA.id });
    this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' });
    this.fileService.add({ name: 'File B', isFolder: false, parent: 'root' });

    this.updateFileElementQuery();
    this.storageService.getUser();
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  updateFileElementQuery() {
    setTimeout(() => {
      this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
    });
  }

  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }

  // addFolder(folder: { name: string }) {
  //   this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
  //   this.updateFileElementQuery();
  // }

  // removeElement(element: FileElement) {
  //   this.fileService.delete(element.id);
  //   this.updateFileElementQuery();
  // }

}
