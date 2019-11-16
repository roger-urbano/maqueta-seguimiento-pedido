import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'qsi-section-navbar',
	templateUrl: './section-navbar.component.html',
	styleUrls: ['./section-navbar.component.scss']
})
export class SectionNavbarComponent implements OnInit {

	listMenu: Array<{ name: string, icon: string, url: string }>;
	scrollActive = false;

	constructor() {
		this.listMenu = [
			{ name: 'Métricas', icon: 'ficon-bar-chart-2', url: '/metrics' },
			{ name: 'Seguimiento pedidos', icon: 'ficon-truck', url: '/tracking' }
		];
	}

	ngOnInit() {
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
