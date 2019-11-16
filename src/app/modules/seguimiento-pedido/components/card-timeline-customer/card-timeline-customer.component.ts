import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-card-timeline-customer',
    templateUrl: './card-timeline-customer.component.html',
    styleUrls: ['./card-timeline-customer.component.scss'],
    animations: animationFadeInUp
})

export class CardTimelineCustomerComponent implements OnInit {
    @Input() public timeline: any

    constructor() {

    }

    ngOnInit() {

    }
}
