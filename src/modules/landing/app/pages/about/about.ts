import { Component } from '@angular/core';

import { ComponentBase } from 'shared/util';

@Component({
    selector: 'about',
    styleUrls: ['./about.scss'],
    templateUrl: './about.html'
})
export class AboutComponent extends ComponentBase {
    constructor() {
        super();
    }
}
