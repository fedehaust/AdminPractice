import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [
        DashboardComponent,
        GraphicsComponent,
        ProgressComponent,
        PagesComponent
    ], imports: [
        SharedModule,
        PagesRoutingModule
    ], exports: [
        DashboardComponent,
        GraphicsComponent,
        ProgressComponent,
        PagesComponent
    ]
})
export class PagesModule { }
