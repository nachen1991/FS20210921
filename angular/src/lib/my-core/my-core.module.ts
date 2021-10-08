import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';



@NgModule({
  declarations: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO,
  ],
  exports: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
