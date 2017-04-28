import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    selector: 'app',
    styleUrls: ['./app.scss'],
    templateUrl: './app.html'
})
export class AppComponent extends ComponentBase {
    constructor() {
        super();
    }
    
    currentYear: number = new Date().getFullYear();
}
