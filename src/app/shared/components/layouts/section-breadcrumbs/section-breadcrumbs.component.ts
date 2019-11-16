import { Component, OnInit } from '@angular/core';
import { BreadcrumbsDataQuery } from '../../../../state';
import { Observable } from 'rxjs';

@Component({
	selector: 'qsi-section-breadcrumbs',
	templateUrl: './section-breadcrumbs.component.html',
	styleUrls: ['./section-breadcrumbs.component.scss']
})
export class SectionBreadcrumbsComponent implements OnInit {
	breadcrumbsData$: Observable<any>;

	constructor(
		private breadcrumbsDataQuery: BreadcrumbsDataQuery
	) { }

	ngOnInit() {
		this.breadcrumbsData$ = this.breadcrumbsDataQuery.select();
		console.log(this.breadcrumbsData$);
	}
}
