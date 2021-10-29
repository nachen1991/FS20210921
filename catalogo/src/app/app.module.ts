import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import { CommonComponentsModule } from './common-components';
import { CommonServicesModule } from './common-services';
import { SecurityModule } from './security';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    SecurityModule,
    CommonComponentsModule,
    CommonServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
