import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
	selector: 'qsi-customer-flow',
	templateUrl: './customer-flow.component.html',
	styleUrls: ['./customer-flow.component.scss'],
	animations: animationFadeInUp
})

export class CustomerFlowComponent implements OnInit {
	public title = 'Flujo de Documentos';
	public icon = 'ficon-corner-down-right';
	public listTimeline: Array<{ title: string, status: string, icon: string }>;

	constructor(private location: Location) {}

	ngOnInit() {
		this.getTimelineCustomer();
	}

	getTimelineCustomer() {
		this.listTimeline = [
			{ title: 'Fecha pedido', status: 'success', icon: 'ficon-check' },
			{ title: 'Fecha preferencia de entrega', status: 'success', icon: 'ficon-check' },
			{ title: 'Fecha preferencia de entrega', status: 'success', icon: 'ficon-check' },
			{ title: 'Fecha preferencia de entrega', status: 'success', icon: 'ficon-check' },
			{ title: 'Fecha preferencia de entrega', status: 'warning', icon: 'qicon-exclaim' }
		];
	}

	/* Retornar a pantalla anterior*/
	backPage() {
		this.location.back();
	}
}
