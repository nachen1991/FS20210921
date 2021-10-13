import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CommonServicesModule } from '../common-services';
import { MyCoreModule } from 'src/lib/my-core';
import { RouterModule } from '@angular/router';
import { CONTACTOS_COMPONENTES } from './componente.component';
import { CommonComponentsModule } from '../common-components';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],
  exports: [CONTACTOS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),NgxPaginationModule,
   MyCoreModule, CommonServicesModule, CommonComponentsModule,
    ],

})
export class ContactosModule { }
