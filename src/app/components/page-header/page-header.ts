import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    selector: 'page-header',
    templateUrl: './page-header.html',
    styleUrls: ['./page-header.scss']
})
export class PageHeaderComponent extends ComponentBase {
    constructor() {
        super();
    }
}
