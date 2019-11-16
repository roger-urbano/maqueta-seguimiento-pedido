import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'metrics',
		loadChildren: './modules/metricas/metricas-module#MetricasModule'
	},
	{
		path: 'tracking',
		loadChildren: './modules/seguimiento-pedido/seguimiento-pedido-module#SeguimientoPedidoModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
