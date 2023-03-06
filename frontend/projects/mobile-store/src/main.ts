import { provideRouter, withDebugTracing } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule, IonicModule.forRoot(),
      BrowserAnimationsModule),
      provideRouter(APP_ROUTES, withDebugTracing()),
    ]
})
  .catch(err => console.error(err));
