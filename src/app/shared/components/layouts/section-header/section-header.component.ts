import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'qsi-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
    showMenu = false;

    constructor() {

    }

    ngOnInit() {

    }

    onChangeSidebar() {
        this.showMenu = !this.showMenu;
    }

    onChangeSidebarExt(closed: boolean) {
        this.showMenu = !this.showMenu;
    }
}
