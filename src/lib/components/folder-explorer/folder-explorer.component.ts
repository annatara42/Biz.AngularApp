import { FileElement } from './folder';

import { Component, Input, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { NewFolderDialogComponent } from './modals/newFolderDialog/newFolderDialog.component';
import { RenameDialogComponent } from './modals/renameDialog/renameDialog.component';

@Component({
  selector: 'app-folder-explorer',
  templateUrl: './folder-explorer.component.html',
  styleUrls: ['./folder-explorer.component.scss']
})
export class FolderExplorerComponent implements OnChanges {
  constructor(public dialog: MatDialog) {}

  @Input() fileElements: FileElement[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{ element: FileElement; moveTo: FileElement }>();
  @Output() navigatedUp = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {}

  // deleteElement(element: FileElement) {
  //   this.elementRemoved.emit(element);
  // }

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  // moveElement(element: FileElement, moveTo: FileElement) {
  //   this.elementMoved.emit({ element: element, moveTo: moveTo });
  // }

  // openNewFolderDialog() {
  //   let dialogRef = this.dialog.open(NewFolderDialogComponent);
  //   dialogRef.afterClosed().subscribe(res => {
  //     if (res) {
  //       this.folderAdded.emit({ name: res });
  //     }
  //   });
  // }

  // openRenameDialog(element: FileElement) {
  //   let dialogRef = this.dialog.open(RenameDialogComponent);
  //   dialogRef.afterClosed().subscribe(res => {
  //     if (res) {
  //       element.name = res;
  //       this.elementRenamed.emit(element);
  //     }
  //   });
  // }

  // openMenu(event: MouseEvent, element: FileElement, viewChild: MatMenuTrigger) {
  //   event.preventDefault();
  //   viewChild.openMenu();
  // }
}

