import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'qsi-order-traceability',
    templateUrl: './order-traceability.component.html',
    styleUrls: ['./order-traceability.component.scss']
})
export class OrderTraceabilityComponent implements OnInit {
    public title = 'Trazabilidad del pedido';
    public icon = 'ficon-trending-up';
    public listOrders: Array<any> = [];

    constructor(private location: Location) {

    }

    ngOnInit() {
        this.getOrders();
    }

    // Retornar a pantalla anterior
    backPage () {
        this.location.back();
    }
    
    getOrders() {
        this.listOrders = [
            {code: '01', name: 'TENA SLIP LARGE X1 EMP. PEGA DESPEGA'},
            {code: '02', name: 'TENA SLIP LARGE X1 EMP. PEGA DESPEGA'},
            {code: '03', name: 'TENA SLIP LARGE X1 EMP. PEGA DESPEGA'},
            {code: '04', name: 'TENA SLIP LARGE X1 EMP. PEGA DESPEGA'},
            {code: '05', name: 'TENA SLIP LARGE X1 EMP. PEGA DESPEGA'}
        ];
    }
}
