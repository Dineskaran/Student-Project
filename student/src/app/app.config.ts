import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { NgModule } from '@angular/core';


import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     Components,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     MatIconModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule)] // new verision angular ussing connect back end
};
