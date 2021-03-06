import { Component, Injectable, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';

export interface Cliente{
  customer_id:number | null;
  store_id: string[];
  nombre: string;
  apellidos: string;
  correo: string | null;
  direccion: string | null;
  activo : boolean;
  f_creacion: string | null;
  u_modificacion: string| null;
  dni: string | null;
}
@Injectable({providedIn: 'root'})
export class ClienteViewModel{
  Lista:string[] = [];
  Listado: Array<Cliente> = [

    {customer_id: 1,
      store_id: this.Lista,
      nombre: 'Hola',
      apellidos: 'Que Tal',
      correo: 'hola@quetal',
      direccion: '1',
      activo: true,
      f_creacion: '2021-10-22',
      u_modificacion: (new Date('2021-10-22')).toString(),
      dni:'12345678Z'},
  ]

  Elemento: any =  {};
  IsAdd = true;

  constructor(private notify: NotificationService){

  }
  public add(){
    this.Elemento = { };
    this.IsAdd = true;
  }

  public edit(){
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public view(){
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }
  public delete(){
    this.notify.add('Borrado');
  }
  public cancel(){

  }

  public send(){
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info);
  }


}

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements OnInit {
  Lista:string[] = ["Tienda 1", "Tienda 2"]
  constructor(public vm:ClienteViewModel) { }

  ngOnInit(): void {
  }

}
