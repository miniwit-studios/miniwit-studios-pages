import { Component } from '@angular/core';

import { ComponentBase } from 'shared/util';

@Component({
    selector: 'home',
    styleUrls: ['./home.scss'],
    templateUrl: './home.html'
})
export class HomeComponent extends ComponentBase {
    constructor() {
        super();
    }
}
