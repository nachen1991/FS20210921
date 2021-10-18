import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CommonServicesModule } from '../common-services';
import { MyCoreModule } from 'src/lib/my-core';
import { RouterModule } from '@angular/router';
import { BLOG_COMPONENTES } from './componente.component';
import { CommonComponentsModule } from '../common-components';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],
  exports: [
    BLOG_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),NgxPaginationModule,
   MyCoreModule, CommonServicesModule, CommonComponentsModule,
    ],

})
export class BlogModule { }
