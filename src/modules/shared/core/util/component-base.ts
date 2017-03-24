import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({ })
export abstract class ComponentBase implements OnInit, AfterViewInit, OnDestroy {
    constructor() { }
    
    private _subscriptions: Subscription[] = [];
    get subscriptions() {
        return this._subscriptions;
    }
    
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        for (let q = 0; q < this._subscriptions.length; q++) {
            this._subscriptions[q].unsubscribe();
        }
        this._subscriptions = [];
    }
}
