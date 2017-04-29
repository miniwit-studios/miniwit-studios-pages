import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    selector: 'page-footer',
    templateUrl: './page-footer.html',
    styleUrls: ['./page-footer.scss']
})
export class PageFooterComponent extends ComponentBase {
    constructor() {
        super();
    }
    
    currentYear: number = new Date().getFullYear();
}
