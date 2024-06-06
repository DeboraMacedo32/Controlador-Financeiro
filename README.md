# ControleFinanceiro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



<mat-sidenav-container class="sidenav-container">
    <mat-sidenav #drawer class="sidenav" fixedInviewport [attr.role]="(isHandsets  | async) ? 'dialog' : 'navigation'"
        [mode]=" (ishandset$ | async) ? 'over' : 'side'" [opened]="(inHandset$ | async) === false">
        <mat-toolbar>Menu</mat-toolbar>
        <mat-nav-list>
            <a mat-list-item routerLink="">Página Principal </a>
            <a mat-list-item routerLink="lancamentos">Lançamentos</a>
        </mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content>
        <mat-toolbar color="primary">
            <button type="button" aria-label="Toggle sidenav" mat-icon-button (click)="drawer.toogle()"
                *ngIf="isHandset$ | async" <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
            </button>
            <span>Controle Financeiro</span>
        </mat-toolbar>
        <router-outlet></router-outlet>
    </mat-sidenav-content>
</mat-sidenav-container>
