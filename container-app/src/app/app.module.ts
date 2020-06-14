import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { FormComponent } from './form/form.component';


import { LazyElementsModule } from '@angular-extensions/elements';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DetailsComponent } from './details/details-app.component';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    SideNavComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    LazyElementsModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [  AppComponent]
})
export class AppModule { }
