import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { BreadcrumbsDataStore } from '../stores/breadcrumbs.store';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbsDataQuery extends Query<any> {
    constructor(
        protected store: BreadcrumbsDataStore
    ) {
        super(store);
    }
}
