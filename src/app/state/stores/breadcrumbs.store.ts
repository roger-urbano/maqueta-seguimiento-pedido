import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

@StoreConfig({
    name: 'breadcrumbsData'
})
@Injectable({
    providedIn: 'root'
})
export class BreadcrumbsDataStore extends Store<any> {
    constructor() {
        const initialValue = {};
        super(initialValue);
    }
}
