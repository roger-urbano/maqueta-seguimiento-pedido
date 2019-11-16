import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, state, group, query, animateChild, stagger } from '@angular/animations';

@Component({
    selector: 'qsi-card-state',
    templateUrl: './card-state.component.html',
    styleUrls: ['./card-state.component.scss'],
    animations: [
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

export class CardStateComponent implements OnInit {
    @Input() public dispatchStates: any;

    constructor() {

    }

    ngOnInit() {
        
    }
}
