import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss'],
    animations: animationFadeInUp
})

export class CardDetailComponent implements OnInit {
    @Input() public titleMetric: string;
    @Input() public typeMetric: number;
    @Input() public order: any;
    @Input() public listDataDropDown: Array<any>;

    constructor() {

    }

    ngOnInit() {

    }
}
