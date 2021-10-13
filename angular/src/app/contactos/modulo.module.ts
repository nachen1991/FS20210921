import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CommonServicesModule } from '../common-services';
import { MyCoreModule } from 'src/lib/my-core';
import { RouterModule } from '@angular/router';
import { CONTACTOS_COMPONENTES } from './componente.component';



@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],
  exports: [CONTACTOS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
   MyCoreModule, CommonServicesModule,
    ],

})
export class ContactosModule { }
