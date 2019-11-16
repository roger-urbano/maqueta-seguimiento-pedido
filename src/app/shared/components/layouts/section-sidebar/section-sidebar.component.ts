import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qsi-section-sidebar',
  templateUrl: './section-sidebar.component.html',
  styleUrls: ['./section-sidebar.component.scss']
})
export class SectionSidebarComponent implements OnInit {
  @Input() showMenu: boolean;
  @Output() closeEventEmiter: EventEmitter<boolean> = new EventEmitter();
  stateClose = false;

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.stateClose = true;
    setTimeout(() => {
      this.showMenu = !this.showMenu;
      this.closeEventEmiter.emit(this.showMenu);
      this.stateClose = false;
    }, 500);
  }

}
