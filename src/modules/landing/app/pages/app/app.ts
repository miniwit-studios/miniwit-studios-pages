import { Component } from '@angular/core';

import { ComponentBase } from 'shared/util';

@Component({
    selector: 'app',
    styleUrls: ['./app.scss'],
    templateUrl: './app.html'
})
export class AppComponent extends ComponentBase {
    constructor() {
        super();
    }
}
