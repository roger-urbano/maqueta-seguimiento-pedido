import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'qsi-seguimiento-breadcrumbs',
  templateUrl: './seguimiento-breadcrumbs.component.html',
  styleUrls: ['./seguimiento-breadcrumbs.component.scss']
})
export class SeguimientoBreadcrumbsComponent implements OnInit {
  @Input() title;
  @Input() icon;

  constructor(private location: Location) { }

  ngOnInit() {

  }

   /* Retornar a pantalla anterior*/
   backPage () {
    this.location.back();
}

}
