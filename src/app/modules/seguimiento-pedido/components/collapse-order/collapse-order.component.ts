import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'qsi-collapse-order',
    templateUrl: './collapse-order.component.html',
    styleUrls: ['./collapse-order.component.scss']
})

export class CollapseOrderComponent implements OnInit {
    @Input() order: any;
    
    constructor() {

    }

    ngOnInit() {

    }
}
