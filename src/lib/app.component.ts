import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-explorer',
  template: `
  <!-- landing page-->
  <div class="mat-app-fluid">
    <launch-app>loading...</launch-app>
  </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
}
