// tslint:disable-next-line: max-line-length
import { AnimationTriggerMetadata, trigger, transition, query, style, stagger, animate, state, animateChild, group } from '@angular/animations';


export const animationTrigger: Array<AnimationTriggerMetadata> = [
    trigger('starCard', [
        transition(':enter', [
            query('.card-animate', [
                style({ opacity: 0 }),
                stagger(15, [
                    animate('.15s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1 }))
                ])
            ])
        ])
    ]),
];

export const animationTriggerTwo: Array<AnimationTriggerMetadata> = [
    trigger('starCard', [
        transition(':enter', [
            query('.card-animate-details', [
                style({ opacity: 0 }),
                stagger(50, [
                    animate('.25s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1 }))
                ])
            ])
        ])
    ]),
];

export const animationTriggerTable: Array<AnimationTriggerMetadata>  = [
    trigger('starTable', [
        transition(':enter', [
            query('.table-row', [
                style({ opacity: 0, transform: 'translateY(100px)' }),
                stagger(100, [
                    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
                ])
            ])
        ])
    ]),
];

export const animationFadeInUp: Array<AnimationTriggerMetadata>  = [
    trigger('fadeInUp', [
        state('void', style({
            opacity: 0
        })),
        transition(':enter', [
            group([
                animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                    opacity: 1,
                })),
                query('@fadeInUpMulti', stagger(200, [
                    animateChild()
                ]), { optional: true })
            ]),
        ]),
        transition(':leave', [
            group([
                animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                    opacity: 0,
                })),
                query('@fadeInUpMulti', [
                    animateChild()
                ], { optional: true })
            ]),
        ]),
    ]),

    trigger('fadeInUpMulti', [
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
];


