import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SidebarComponent
  ], imports: [
  ], exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
