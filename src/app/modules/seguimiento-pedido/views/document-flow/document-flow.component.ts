import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-document-flow',
    templateUrl: './document-flow.component.html',
    styleUrls: ['./document-flow.component.scss'],
    animations: animationFadeInUp
})
export class DocumentFlowComponent implements OnInit {
    public title = 'Flujo de Documentos';
    public icon = 'ficon-corner-down-right';
    public listTimeline: Array<{order: string, status: string, icon: string}>;

    constructor(
        private location: Location
    ) {}

    ngOnInit() {
        this.getTimelineCustomer();
    }

    getTimelineCustomer() {
        this.listTimeline = [
            {order: '0021810191', status: 'success', icon: 'ficon-check'},
            {order: '0021810191', status: 'warning', icon: 'qicon-exclaim'},
            {order: '0021810191', status: 'success', icon: 'ficon-check'},
            {order: '0021810191', status: 'warning', icon: 'qicon-exclaim'},
            {order: '0021810191', status: 'success', icon: 'ficon-check'},
        ];
    }

    /* Retornar a pantalla anterior*/
    backPage () {
        this.location.back();
    }
}
