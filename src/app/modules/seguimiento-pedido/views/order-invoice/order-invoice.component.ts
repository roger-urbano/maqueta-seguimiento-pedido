import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { animationFadeInUp } from '../../../../shared/animations/animations';


@Component({
    selector: 'qsi-order-invoice',
    templateUrl: './order-invoice.component.html',
    styleUrls: ['./order-invoice.component.scss'],
    animations: animationFadeInUp
})
export class OrderInvoiceComponent implements OnInit {
    title = 'Facturas del pedido';
    icon = 'ficon-file-text';
    listInvoices: Array<{code: string}>;

    constructor(private location: Location) {
        
    }

    ngOnInit() {
        this.getInvoices();
    }

    getInvoices() {
        this.listInvoices = [
            {code: '08-0FD02-0075238'},
            {code: '08-0FD02-0075238'},
            {code: '08-0FD02-0075238'},
            {code: '08-0FD02-0075238'},
            {code: '08-0FD02-0075238'}
        ];
    }

    /* Retornar a pantalla anterior*/
    backPage () {
        this.location.back();
    }
}
