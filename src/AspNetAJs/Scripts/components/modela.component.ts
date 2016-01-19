import { Component, View } from 'angular2/core';
import { ModelA } from '../models/modela';

@Component({
    selector: "modela-view",
    inputs: ["testvar"],
    template: `<h3>Super: {{testvar.lastName + ', ' + testvar.firstName}}</h3>
        <form-end-place></form-end-place>`
})
export class ModelASuperComponent {
    testvar: ModelA;
}