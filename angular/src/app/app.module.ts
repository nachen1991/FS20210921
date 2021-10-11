import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { MainModule } from './main';
import { CommonServicesModule } from './common-services';
import { SecurityModule } from './security';
import { environment } from 'src/environments/environment';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { CommonComponentsModule } from './common-components';
import { HttpClientModule } from '@angular/common/http';
 @NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
    ClienteFormularioComponent,


  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MyCoreModule, MainModule, CommonServicesModule, SecurityModule, CommonComponentsModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL,useValue: environment.ERROR_LEVEL},
    //{provide: LoggerService, useClass: LoggerHTTPService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
