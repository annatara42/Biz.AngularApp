import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Form Controls //
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import { ModalModule } from './modal';

import {MatDialogModule} from '@angular/material/dialog';
import { AlertDialogComponent } from '../shared/alert-dialog/alert-dialog.component';

import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatListModule  } from '@angular/material/list';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import {MatExpansionModule} from '@angular/material/expansion';

const modules: any[] = [
  BrowserModule,
  BrowserAnimationsModule,
  LayoutModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSelectModule,
  MatGridListModule,

  MatIconModule,
  MatButtonModule,
  MatTreeModule,
  ModalModule,
  MatDialogModule,

  MatSidenavModule,
  MatListModule,

  MatMenuModule,
  MatCardModule,
  MatExpansionModule
];

@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class SharedModule {
  constructor() {}

}