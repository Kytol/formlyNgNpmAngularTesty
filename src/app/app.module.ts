import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


import { CommonModule } from '@angular/common';


import {BreadcrumbModule} from 'xng-breadcrumb';
import { TestycomponetComponent } from './testycomponet/testycomponet.component';

import { RouterModule, Routes } from '@angular/router';
import { Testycomponet2Component } from './testycomponet2/testycomponet2.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


const appRoutes: Routes = [
  { path: 'one', component: TestycomponetComponent,data: { breadcrumb: 'ONEROUTE' } },
  { path: 'two',        component: Testycomponet2Component,data: { breadcrumb: 'TWOROUTE' } },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TestycomponetComponent
  ],
  imports: [
    BrowserModule,
    BreadcrumbModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
