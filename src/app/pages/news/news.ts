import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './news.html',
    styleUrls: ['./news.scss']
})
export class NewsComponent extends ComponentBase {
    constructor() {
        super();
    }
}
