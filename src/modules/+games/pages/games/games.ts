import { Component } from '@angular/core';
import { ComponentBase } from 'utils/components';

@Component({
    templateUrl: './games.html',
    styleUrls: ['./games.scss']
})
export class GamesComponent extends ComponentBase {
    constructor() {
        super();
    }
}
