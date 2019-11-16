import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animationFadeInUp } from '../../../../shared/animations/animations';

@Component({
    selector: 'qsi-card-timeline-document',
    templateUrl: './card-timeline-document.component.html',
    styleUrls: ['./card-timeline-document.component.scss'],
    animations: animationFadeInUp
})

export class CardTimelineDocumentComponent implements OnInit {
    @Input() public timeline: any

    constructor() {

    }

    ngOnInit() {
        
    }
}
