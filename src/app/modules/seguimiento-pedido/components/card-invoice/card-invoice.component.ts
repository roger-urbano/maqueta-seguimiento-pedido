import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-card-invoice',
    templateUrl: './card-invoice.component.html',
    styleUrls: ['./card-invoice.component.scss'],
    animations: animationFadeInUp
})

export class CardInvoiceComponent implements OnInit {
    @Input() public invoice: any;

    constructor() {

    }

    ngOnInit() {
        
    }
}