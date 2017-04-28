import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    selector: 'not-found',
    styleUrls: ['./not-found.scss'],
    templateUrl: './not-found.html'
})
export class NotFoundComponent extends ComponentBase {
    constructor() {
        super();
    }
}
