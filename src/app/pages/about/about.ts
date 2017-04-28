import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})
export class AboutComponent extends ComponentBase {
    constructor() {
        super();
    }
}
