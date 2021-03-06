import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { AjaxWaitInterceptor, MainModule } from './main';
import { CommonServicesModule } from './common-services';
import { AuthInterceptor, SecurityModule } from './security';
import { environment } from 'src/environments/environment';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { CommonComponentsModule } from './common-components';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactosModule } from './contactos';
import { BlogModule } from './blog';
import { LibrosModule } from './libros';

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
    BrowserModule, FormsModule, HttpClientModule, ContactosModule, LibrosModule,BlogModule,
    AppRoutingModule, MyCoreModule, MainModule, CommonServicesModule, SecurityModule, CommonComponentsModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL,useValue: environment.ERROR_LEVEL},
    //{provide: LoggerService, useClass: LoggerHTTPService},
    { provide: LOCALE_ID, useValue: 'es-ES'},
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
