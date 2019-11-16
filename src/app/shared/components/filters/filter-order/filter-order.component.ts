import { Component, OnInit } from '@angular/core';

// CAMBIO IDIOMA EN DATA PICKER
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);


@Component({
  selector: 'qsi-filter-order',
  templateUrl: './filter-order.component.html',
  styleUrls: ['./filter-order.component.scss']
})
export class FilterOrderComponent implements OnInit {


  constructor(private localeService: BsLocaleService) {
    this.localeService.use('es'); //fecha en español, datepicker
  }

  ngOnInit() {
  }

}
