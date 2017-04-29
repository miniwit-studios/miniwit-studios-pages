import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    selector: 'page-nav',
    templateUrl: './page-nav.html',
    styleUrls: ['./page-nav.scss']
})
export class PageNavComponent extends ComponentBase {
    constructor() {
        super();
    }
}
