import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionNavbarComponent } from './section-navbar/section-navbar.component';
import { SectionBreadcrumbsComponent } from './section-breadcrumbs/section-breadcrumbs.component';
import { SectionNavbarResponsiveComponent } from './section-navbar-responsive/section-navbar-responsive.component';
import { SectionSidebarComponent } from './section-sidebar/section-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        SectionHeaderComponent,
        SectionNavbarComponent,
        SectionBreadcrumbsComponent,
        SectionNavbarResponsiveComponent,
        SectionSidebarComponent
    ],
    exports: [
        SectionNavbarComponent,
        SectionHeaderComponent,
        SectionBreadcrumbsComponent,
        SectionNavbarResponsiveComponent,
        SectionSidebarComponent
    ]
})
export class LayoutsModule {}
