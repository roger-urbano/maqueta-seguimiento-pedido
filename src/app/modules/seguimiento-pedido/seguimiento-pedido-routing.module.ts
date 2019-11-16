import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromViews from './views';
import { SeguimientoPedidoComponent } from './seguimiento-pedido.component';

const routes: Routes = [
    {
        path: '',
        component: SeguimientoPedidoComponent,
        children: [
            {
                path: '',
                redirectTo: 'order-tracking',
                pathMatch: 'full'
            },
            {
                path: 'order-tracking',
                component: fromViews.OrderTrakingComponent
            },
            {
                path: 'order-detail',
                component: fromViews.OrderDetailComponent
            },
            {
                path: 'order-invoice',
                component: fromViews.OrderInvoiceComponent
            },
            {
                path: 'order-original',
                component: fromViews.OrderOriginalComponent
            },
            {
                path: 'document-flow',
                component: fromViews.DocumentFlowComponent
            },
            {
                path: 'customer-flow',
                component: fromViews.CustomerFlowComponent
            },
            {
                path: 'order-traceability',
                component: fromViews.OrderTraceabilityComponent
            }
        ]
    },
    {
        path: '', redirectTo: '', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeguimientoPedidoRoutingModule {}
