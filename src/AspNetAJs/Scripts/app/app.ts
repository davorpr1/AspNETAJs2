import { Component, View } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';
import { ModelA } from '../models/modela';
import { ModelASuperComponent } from '../components/modela.component';

@Component({
    directives: [FORM_DIRECTIVES, ModelASuperComponent],
    selector: "my-app",
    template: `<h2>Welcome: {{testvar.lastName + ', ' + testvar.firstName}}

    <br /><input type="text" [(ngModel)]="testvar.firstName">
    <br /><input type="text" [(ngModel)]="testvar.lastName">

    <br /><modela-view [testvar]="testvar"></modela-view>`
})
class AppComponent {
    testvar: ModelA = new ModelA();
    constructor() {
        this.testvar.firstName= "John";
        this.testvar.lastName= "Smith";
    }
}

bootstrap(AppComponent);