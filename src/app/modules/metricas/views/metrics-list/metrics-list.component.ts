import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state, group, query, animateChild, stagger } from '@angular/animations';
import { BreadcrumbsDataStore } from '../../../../state';

@Component({
    selector: 'qsi-metrics-list',
    templateUrl: './metrics-list.component.html',
    styleUrls: ['./metrics-list.component.scss'],
    animations: [
        trigger('parentFadeAnimate', [
            state('void', style({
                opacity: 0,
            })),
            transition(':enter', [
                group([
                    animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                        opacity: 1
                    })),
                    query('@childFadeAnimate', stagger(200, [
                        animateChild()
                    ]), { optional: true })
                ]),
            ]),
            transition(':leave', [
                group([
                    animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                        opacity: 0,
                    })),
                    query('@childFadeAnimate', [
                        animateChild()
                    ], { optional: true })
                ]),
            ]),

        ]),
        trigger('childFadeAnimate', [
            state('void', style({
                transform: 'translateY(40px)',
                opacity: 0
            })),
            transition(':enter', [
                animate(300, style({
                    opacity: 1,
                    transform: 'translateY(0)'
                }))
            ]),
            transition(':leave', [
                animate(300, style({
                    opacity: 0,
                    transform: 'translateY(40px)'
                }))
            ])
        ]),
    ]
})
export class MetricsListComponent implements OnInit {
    preDispatchStates: Array<{name: string, svg: string, id: number}>;
    postDispatchStates: Array<{name: string, svg: string, id: number}>;
    scrollActive = false;

    constructor(
        private breadcrumbsDataStore: BreadcrumbsDataStore
    ) { }

    ngOnInit() {
        let breadCrumbs = [
            {   
                id: 1,
                name: 'Consultas'
            },
            {   
                id: 2,
                name: 'Metricas'
            }
        ];
        this.breadcrumbsDataStore.update({list: breadCrumbs});
        this.getPreDispatchStates();
        this.getPostDispatchStates();
    }

    getPreDispatchStates() {
        this.preDispatchStates = [
            {name: 'En creación', svg: 'assets/images/creacion.svg', id: 1},
            {name: 'Rechazado por crédito', svg: 'assets/images/rechazado.svg', id: 2},
            {name: 'No atendidos', svg: 'assets/images/no-atendido.svg', id: 3},
            {name: 'Rechazado por comercial', svg: 'assets/images/no-atendido.svg', id: 4},
            {name: 'Entrega Creada', svg: 'assets/images/entrega.svg', id: 5},
            {name: 'Facturado', svg: 'assets/images/facturado.svg', id: 6}
        ];
    }

    getPostDispatchStates() {
        this.postDispatchStates = [
            {name: 'Programado', svg: 'assets/images/programado.svg', id: 7},
            {name: 'En Ruta', svg: 'assets/images/ruta.svg', id: 8},
            {name: 'Finalizado', svg: 'assets/images/finalizado.svg', id: 9},
            {name: 'No realizado', svg: 'assets/images/no-realizado.svg', id: 10},
        ];
    }
}
