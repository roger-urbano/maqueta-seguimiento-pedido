import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
	selector: 'qsi-order-detail',
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss'],
	animations: animationFadeInUp
})

export class OrderDetailComponent implements OnInit {
	public title = 'Detalle de pedido';
	public icon = 'ficon-alert-circle';
	public scrollActive: boolean;
	public listOrders: Array<any>;

	constructor(
		private location: Location
	) {}

	ngOnInit() {
		this.getOrders();
	}

	getOrders() {
		this.listOrders = [
			{
				order: '640015',
				name: 'CIPROFLOXACINO 500MG TAB.REC. X 100 (QG)'
			},
			{
				order: '640016',
				name: 'CIPROFLOXACINO 500MG TAB.REC. X 100 (QG)'
			},
			{
				order: '640016',
				name: 'CIPROFLOXACINO 500MG TAB.REC. X 100 (QG)'
			},
			{
				order: '640017',
				name: 'CIPROFLOXACINO 500MG TAB.REC. X 100 (QG)'
			},
			{
				order: '640018',
				name: 'CIPROFLOXACINO 500MG TAB.REC. X 100 (QG)'
			}
		];
	}

	// Retornar a pantalla anterior
	backPage() {
		this.location.back();
	}

	@HostListener('window:scroll')
	checkScroll() {
		const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (scrollPosition >= 100) {
			this.scrollActive = true;
		} else {
			this.scrollActive = false;
		}
	}
}
