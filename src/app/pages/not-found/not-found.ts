import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './not-found.html',
    styleUrls: ['./not-found.scss']
})
export class NotFoundComponent extends ComponentBase {
    constructor() {
        super();
    }
}
