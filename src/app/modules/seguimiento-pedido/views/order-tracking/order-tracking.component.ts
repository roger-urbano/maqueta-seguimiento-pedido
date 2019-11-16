import { Component, OnInit } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-order-tracking',
    templateUrl: './order-tracking.component.html',
    styleUrls: ['./order-tracking.component.scss'],
    animations: animationFadeInUp
})
export class OrderTrakingComponent implements OnInit {
    public listOrders: Array<{ order: string, name: string, date: any, user: any, type: any, icon: string, state: string, stateId: number }>;

    constructor() {

    }

    ngOnInit() {
        this.getOrders();
    }

    getOrders() {
        this.listOrders = [
            {
                order: '21826467',
                name: 'SUCESION INDIVISA VALDERRAMA',
                date: '15/10/2019',
                user: ' WEB-00048398',
                type: 'ZP02', 
                icon: 'ficon-hash',
                state: 'Entrega creada',
                stateId: 1
            },
            { 
                order: '21826467', 
                name: 'SUCESION INDIVISA VALDERRAMA',
                date: '15/10/2019', 
                user: ' WEB-00048398', 
                type: 'ZP02', 
                icon: 'ficon-calendar',
                state: 'Rechazada por crédito',
                stateId: 2
            },
            { 
                order: '21826467', 
                name: 'SUCESION INDIVISA VALDERRAMA',
                date: '15/10/2019', 
                user: ' WEB-00048398', 
                type: 'ZP02', 
                icon: 'ficon-box',
                state: 'Entrega creada',
                stateId: 3
            },
            { 
                order: '21826467', 
                name: 'SUCESION INDIVISA VALDERRAMA',
                date: '15/10/2019', 
                user: ' WEB-00048398', 
                type: 'ZP02', 
                icon: 'ficon-box',
                state: 'No atentidos',
                stateId: 4
            },
        ];
    }
}
