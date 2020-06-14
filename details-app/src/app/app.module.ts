import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const details = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('user-details-app', details);
  }
}
