import { OrderTrakingComponent } from './order-tracking/order-tracking.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CustomerFlowComponent } from './customer-flow/customer-flow.component';
import { DocumentFlowComponent } from './document-flow/document-flow.component';
import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';
import { OrderOriginalComponent } from './order-original/order-original.component';
import { OrderTraceabilityComponent } from './order-traceability/order-traceability.component';

export const views:any[] = [
    OrderTrakingComponent,
    OrderDetailComponent,
    CustomerFlowComponent,
    DocumentFlowComponent,
    OrderInvoiceComponent,
    OrderOriginalComponent,
    OrderTraceabilityComponent
];

export * from './order-tracking/order-tracking.component';
export * from './order-detail/order-detail.component';
export * from './customer-flow/customer-flow.component';
export * from './document-flow/document-flow.component';
export * from './order-invoice/order-invoice.component';
export * from './order-original/order-original.component';
export * from './order-traceability/order-traceability.component';
