import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-errors-messages',
  templateUrl: './show-errors-messages.component.html',
  styleUrls: ['./show-errors-messages.component.scss']
})
export class ShowErrorsMessagesComponent implements OnInit {
   max = 'max';
   min = 'min';
   maxlength = 'maxlength';
   minlength='minlength';
   email = 'email';
   required = 'required';

  type: string [] = [
   this.max, this.min, this.maxlength, this.minlength, this.email, this.required
  ];
  listado = [
     'El máximo es {{item}}'  ,
     'El mínimo es {{item}}'  ,
     'El maximo de caracteres es {{item}}',
     'El minimo de caracteres es {{item}}' ,
     'Tiene que ser un email'  ,
     'Es obligatorio' ,
  ];
@Input() cntr_errors: string = '';

  constructor() { }


  public listado_errores(): string {
    let msg:string = '';
    for(let i of this.type){

       if(i == 'max'){
         msg = this.listado[0];
         break;
       }
       if(i === 'min'){ msg = this.listado[1]; break;}
       if(i === 'maxlength'){ msg = this.listado[2]; break;}
       if(i === 'minlength'){ msg = this.listado[3]; break;}
       if(i === 'email'){ msg = this.listado[4]; break;}
       if(i === 'required'){ msg = this.listado[5]; break;}

     }
     return msg;

    }


  ngOnInit(): void {
  }

}
