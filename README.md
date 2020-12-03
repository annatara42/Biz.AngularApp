
## Prerequisites

Node -v --> v12.8.3 or version 10 and above
npm -v --> v6.14.8 or version 6 and above 

# VmsStorageExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

# Setup in another machine

npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build in Local server

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build in Local server for Elements

npm run build:elements internally it uses "ng build --prod --output-hashing none && node build-elements.js"

## Testing in VMS web Environment

Run a live server and go to the test folder and try to access HTMl which in turn uses bundled index.js file

http-server elements
npm run build:elements

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## New setup
npm install -g @angular/cli
ng new vms-storage-explorer

ng add @angular/elements --project= vms-storage-explorer
npm install --save-dev webpack webpack-cli webpack-dev-server

## for setting up Node Concatenation
npm install --save-dev concat fs-extra

npm install -g npm

npm install -g http-server

## Angular materail Setup
npm install @angular/material @angular/cdk @angular/animations --save
or 
ng add @angular/material

ng generate @angular/material:tree <component-name>

## Angular Local Build
ng build --configuration qa|uat|prod
ng build --prod


npm install --save @angular/flex-layout

npm install --save uuid
