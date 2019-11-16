import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-card-order-original',
    templateUrl: './card-order-original.component.html',
    styleUrls: ['./card-order-original.component.scss'],
    animations: animationFadeInUp
})

export class CardOrderOriginalComponent implements OnInit {
    @Input() public order: any;

    constructor() {

    }

    ngOnInit() {

    }
}
