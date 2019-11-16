import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOrderComponent } from './filter-order/filter-order.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [FilterOrderComponent],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot()

  ],
  exports: [
    FilterOrderComponent
]
})
export class FiltersModule { }
