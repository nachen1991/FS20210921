import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  private acum: number = 0;
  private operador : string = '+';
  private reset = true;
  screen : string = '0';


  constructor() {
    this.inicia();
   }


  //  get Pantalla(): string{
  //    return this.screen;
  //  }

	inicia() :void{
		this.acum = 0;
		this.operador = '+';
		this.screen = '0';
		this.reset = true;
	};



  ponerDigito(num: string):void{
    if (this.screen == '0'|| this.reset) {
      this.screen  = num;
      this.reset = false;
    } else {
      this.screen += num;

    }
  }

  Operaciones(operacion : string): void {
    if ('+-*/='.indexOf(operacion) == -1) return;
    let valor = parseFloat(this.screen);
    switch (this.operador) {
      case "+":
        this.acum += valor;
        break;
      case "-":
        this.acum -= valor;
        break;
      case "*":
        this.acum *= valor;
        break;
      case "/":
        this.acum /= valor;
        break;
    }
    this.operador = operacion;
    this.reset = true;
    this.screen = this.acum.toString();
  }


  ponComa ():void {
		if (this.reset) {
			this.screen= '0.';
			this.reset = false;
		} else if (this.screen.indexOf('.') === -1) {
			this.screen += '.';
		} else
			console.warn('Ya está la coma');
	};

  borrar():void {
		if (this.reset || this.screen.length == 1 || (this.screen.length == 2 && this.screen.startsWith('-'))) {
			this.screen = '0';
			this.reset = true;
		} else
			this.screen = this.screen.substr(0,
				this.screen.length - 1);
	};

  cambiaSigno():void {
		this.screen = (-this.screen).toString();
		if (this.reset) {
			this.acum = -this.acum;
		}

	};
  ngOnInit(): void {
  }

}
