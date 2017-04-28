import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService as MiterCrudService, DEFAULT_PER_PAGE, SearchResults, pluralize } from 'miter-shared-module';

type FromJsonFn<T> = { (json: any): T | null };

@Injectable()
export class CrudService<T> extends MiterCrudService<T> {
    constructor(_http: Http, modelName: string, fromJson: FromJsonFn<T>, singularPath?: string, pluralPath?: string) {
        super(_http, modelName, fromJson, singularPath, pluralPath);
    }
    
    get basePath() {
        return CONFIG.api.basePath;
    }
}
