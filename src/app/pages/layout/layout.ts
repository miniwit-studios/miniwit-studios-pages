import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './layout.html',
    styleUrls: ['./layout.scss']
})
export class LayoutComponent extends ComponentBase {
    constructor() {
        super();
    }
    
    currentYear: number = new Date().getFullYear();
}
