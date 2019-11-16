import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-card-order-detail',
    templateUrl: './card-order-detail.component.html',
    styleUrls: ['./card-order-detail.component.scss'],
    animations: animationFadeInUp
})

export class CardOrderDetailComponent implements OnInit {
    @Input() public order: any;

    constructor() {

    }

    ngOnInit() {

    }
}
