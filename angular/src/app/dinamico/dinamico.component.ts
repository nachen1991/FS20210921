import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { NotificationService } from '../common-services';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto:'Inicio', icono: '', componente: HomeComponent},
    {texto:'Demos', icono: '', componente: DemosComponent },
    {texto:'Calculadora', icono: '', componente: CalculadoraComponent},
  ];

  actual = this.menu[0].componente;

  constructor(public vm: NotificationService) { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;

  }

  ngOnInit(): void {
  }

}
