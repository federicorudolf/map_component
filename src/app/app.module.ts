import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Angular Material Modules

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

// Material Google Maps

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuRxo9p0xHnMUV2r8KxnBA225xMNi_S64'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
