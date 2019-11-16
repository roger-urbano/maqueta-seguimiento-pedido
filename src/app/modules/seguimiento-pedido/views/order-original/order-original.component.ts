import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
	selector: 'qsi-order-original',
	templateUrl: './order-original.component.html',
	styleUrls: ['./order-original.component.scss'],
	animations: animationFadeInUp
})
export class OrderOriginalComponent implements OnInit {
	public title = 'Pedido original';
	public icon = 'ficon-package';
	public listOrders: Array<any> = [];

	constructor(private location: Location) {

	}

	ngOnInit() {
		this.getOrders();
	}

	getOrders() {
		this.listOrders = [
			{
				order: '137770',
				name: 'VICK VAPORUB UNG. PTE 100 GR',
				count: 5
			},
			{
				order: '137771',
				name: 'VICK VAPORUB UNG. PTE 100 GR',
				count: 6
			},
			{
				order: '137772',
				name: 'VICK VAPORUB UNG. PTE 100 GR',
				count: 7
			},
			{
				order: '137773',
				name: 'VICK VAPORUB UNG. PTE 100 GR',
				count: 8
			},
			{
				order: '137775',
				name: 'VICK VAPORUB UNG. PTE 100 GR',
				count: 9
			}
		];
	}

	/* Retornar a pantalla anterior*/
	backPage() {
		this.location.back();
	}
}
