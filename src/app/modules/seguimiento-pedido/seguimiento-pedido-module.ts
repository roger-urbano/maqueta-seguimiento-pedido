import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromViews from './views';
import * as fromComponents from './components';
import { SeguimientoPedidoRoutingModule } from './seguimiento-pedido-routing.module';
import { SeguimientoPedidoComponent } from './seguimiento-pedido.component';
import { LayoutsModule, FiltersModule } from '../../shared';

@NgModule({
    declarations: [
        ...fromViews.views,
        ...fromComponents.componentsSeguimiento,
        SeguimientoPedidoComponent
    ],
    imports: [
        CommonModule,
        SeguimientoPedidoRoutingModule,
        LayoutsModule,
        FiltersModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        fromViews.views
    ]
})

export class SeguimientoPedidoModule {}
