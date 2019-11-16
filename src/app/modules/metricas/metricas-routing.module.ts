import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromViews from './views';
import { MetricasComponent } from './metricas.component';

const routes: Routes = [
    {
        path: '',
        component: MetricasComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: fromViews.MetricsListComponent
            },
            {
                path: 'detail/:type',
                component: fromViews.MetricsDetailComponent
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
export class MetricasRoutingModule {}
