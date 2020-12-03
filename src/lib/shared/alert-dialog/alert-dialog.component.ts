import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  selectedSource: string;
  message: string;
  buttonText: string;
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent {
  message: string = ""
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<AlertDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('700vw','700vw')
  }
  public getSelectedSource(message : string){
    this.data.selectedSource = message;
    // alert(message);
     this.dialogRef.close(this.data.selectedSource);
  } 
  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close();
  }

}