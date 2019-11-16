import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'qsi-card-totales',
  templateUrl: './card-totales.component.html',
  styleUrls: ['./card-totales.component.scss']
})
export class CardTotalesComponent implements OnInit {

  scrollActive: boolean;
  constructor() {

  }

  ngOnInit() {
  }

  @HostListener('window:scroll')
    checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 100 ) {
      this.scrollActive = true;
    } else {
      this.scrollActive = false;
    }
  }

}
