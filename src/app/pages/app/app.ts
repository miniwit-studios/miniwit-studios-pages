import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    styleUrls: ['./app.scss']
})
export class AppComponent extends ComponentBase {
    constructor() {
        super();
    }
}
