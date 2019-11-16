import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsDataStore } from '../../../../state';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-metrics-detail',
    templateUrl: './metrics-detail.component.html',
    styleUrls: ['./metrics-detail.component.scss'],
    animations: animationFadeInUp
})
export class MetricsDetailComponent implements OnInit {
    public typeMetric: number;
    public iconMetric: string;
    public titleMetric: string;
    public listDataDropDown = this.dataDropDown();
    public listOrders: Array<any> = [];

    constructor(
        private route: ActivatedRoute,
        private breadcrumbsDataStore: BreadcrumbsDataStore
    ) {

    }

    ngOnInit() {
        let breadCrumbs = [
            {   
                id: 1,
                name: 'Consultas'
            },
            {   
                id: 2,
                name: 'Detalle'
            }
        ];
        this.breadcrumbsDataStore.update({list: breadCrumbs});
        this.getOrders();
        this.route.paramMap.subscribe((params: any) => {
            this.typeMetric = +params.params.type;
            this.changeDataDetail();
        });
    }

    getOrders() {
        this.listOrders = [
            {
                code: '0000338633',
                name: 'SUCESIÓN INDIVISA VALDERRAMA',
                order: '21826467',
                date: '11/07/2019',
                user: 'WEB-00048398',
                type: 'ZP02',
                amount: 452.64
            },
            {
                code: '0000338634',
                name: 'SUCESIÓN INDIVISA VALDERRAMA',
                order: '21826467',
                date: '11/07/2019',
                user: 'WEB-00048398',
                type: 'ZP02',
                amount: 454.64
            },
            {
                code: '0000338635',
                name: 'SUCESIÓN INDIVISA VALDERRAMA',
                order: '21826467',
                date: '11/07/2019',
                user: 'WEB-00048398',
                type: 'ZP02',
                amount: 462.64
            },
            {
                code: '0000338636',
                name: 'SUCESIÓN INDIVISA VALDERRAMA',
                order: '21826467',
                date: '11/07/2019',
                user: 'WEB-00048398',
                type: 'ZP02',
                amount: 352.64
            },
            {
                code: '0000338637',
                name: 'SUCESIÓN INDIVISA VALDERRAMA',
                order: '21826467',
                date: '11/07/2019',
                user: 'WEB-00048398',
                type: 'ZP02',
                amount: 252.64
            }
        ];
    }

    dataDropDown(): Array<{name: string, svg: string, url: string}> {
        return [
            {name: 'Detalle de pedido', svg: 'ficon-alert-circle', url: '/tracking/order-detail'},
            {name: 'Facturas del pedido', svg: 'ficon-file-text', url: '/tracking/order-detail'},
            {name: 'Pedido original', svg: 'ficon-box', url: '/tracking/order-detail'},
            {name: 'Flujo de cliente', svg: 'ficon-corner-down-right', url: '/tracking/order-detail'},
            {name: 'Flujo de documentos', svg: 'ficon-corner-down-right', url: '/tracking/order-detail'},
            {name: 'Trazabilidad de pedidos', svg: 'ficon-trending-down', url: '/tracking/order-traceability'}
        ];
    }

    changeDataDetail() {
        switch (this.typeMetric) {
            case 1:
                this.iconMetric = 'assets/images/creacion';
                this.titleMetric = 'En creación';
                break;
            case 2:
                this.iconMetric = 'assets/images/rechazado';
                this.titleMetric = 'Rechazado por crédito';
                break;
            case 3:
                this.iconMetric = 'assets/images/no-atendido';
                this.titleMetric = 'No atendidos';
                break;
            case 4:
                this.iconMetric = 'assets/images/no-atendido';
                this.titleMetric = 'Rechazado por comercial';
                break;
            case 5:
                this.iconMetric = 'assets/images/entrega';
                this.titleMetric = 'Entrega Creada';
                break;
            case 6:
                this.iconMetric = 'assets/images/facturado';
                this.titleMetric = 'Facturado';
                break;
            case 7:
                this.iconMetric = 'assets/images/programado';
                this.titleMetric = 'Programado';
                break;
            case 8:
                this.iconMetric = 'assets/images/ruta';
                this.titleMetric = 'En ruta';
                break;
            case 9:
                this.iconMetric = 'assets/images/finalizado';
                this.titleMetric = 'Finalizado';
                break;
            case 10:
                this.iconMetric = 'assets/images/no-realizado';
                this.titleMetric = 'No realizado';
                break;
        }
    }
}
