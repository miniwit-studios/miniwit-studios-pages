import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './app.html',
    styleUrls: ['./app.scss']
})
export class AppComponent extends ComponentBase {
    constructor() {
        super();
    }
    
    currentYear: number = new Date().getFullYear();
}
