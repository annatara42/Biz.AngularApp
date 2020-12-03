import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule ,Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { TreeModule } from './components/tree/tree.module';
// import { FolderModule } from './components/folder-explorer/folder.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    // TreeModule,
    // FolderModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(AppComponent, {injector: injector});
    customElements.define('app-storage-explorer', custom);
  }
  ngDoBootstrap(): void {}
}
