import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricasRoutingModule } from './metricas-routing.module';
import { LayoutsModule, FiltersModule } from '../../shared';

import { MetricasComponent } from './metricas.component';

import * as fromViews from './views';
import * as fromComponents from './components';

@NgModule({
    declarations: [
        ...fromViews.views,
        ...fromComponents.componentsMetrics,
        MetricasComponent
    ],
    imports: [
        CommonModule,
        MetricasRoutingModule,
        LayoutsModule,
        FiltersModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        fromViews.views
    ]
})

export class MetricasModule {}
