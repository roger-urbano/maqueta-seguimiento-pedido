import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';


@Component({
    selector: 'qsi-card-order',
    templateUrl: './card-order.component.html',
    styleUrls: ['./card-order.component.scss'],
    animations: animationFadeInUp
})

export class CardOrderComponent implements OnInit {
    @Input() public order: any;
    
    constructor() {

    }

    ngOnInit() {

    }
}
