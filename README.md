# AotProdEnv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4 but has been upgrade to 7.2.0.

## Bug

Environment files that are composed using the spread operator do not work when used in a production configuration.

Note that Object.assign does not work as well.

Potentially related: https://github.com/angular/angular-cli/issues/9511

## Testing Reported Bug

Note environment data can also be seen in console

### Non-production mode

Run `ng serve -c dev` and navigate to `http://localhost:4200/`

Screen should show:

---
Environment Config Information

Prod mode: false

{"production":false,"commonMessage":"Seen by all envs","envMessage":"Dev message"}

---

### BUG: Production mode 

Run `ng serve -c production` and navigate to `http://localhost:4200/`

Screen should show (but doesn't):

---
Environment Config Information

Prod mode: false

{"production":true,"commonMessage":"Seen by all envs","envMessage":"Prod message"}

---

#### Instead "commonMessage":"Seen by all envs" is missing

Screen shows:

---

Environment Config Information

Prod mode: true

{"production":true,"envMessage":"Prod message"}

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
