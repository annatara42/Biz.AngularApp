import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { TreeComponent } from '../tree/tree.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    TreeComponent
  ],
  exports: [
    TreeComponent
  ],
  providers: []
})
export class TreeModule {

  constructor() { }

}
