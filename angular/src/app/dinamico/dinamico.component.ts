import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { NotificationService } from '../common-services';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto:'formulario cliente', icono: 'fas fa-user-tie', componente: ClienteFormularioComponent},
    {texto:'formulario', icono: 'fas fa-user-tie', componente: FormularioComponent},
    {texto:'Inicio', icono: 'fas fa-home', componente: HomeComponent},
    {texto:'Demos', icono: 'fas fa-chalkboard-teacher', componente: DemosComponent },
    {texto:'Calculadora', icono: 'fas fa-calculator', componente: CalculadoraComponent},
  ];

  actual = this.menu[0].componente;

  constructor(public vm: NotificationService) { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;

  }

  ngOnInit(): void {
  }

}
