class Calculadora {

  constructor() {
    this.acum = 0;
    this.screen = '0';
    this.op = '+';
    this.reset = true;
  }

  ponerdigito(num) {
    if (this.screen == "0" || this.reset) {
      this.screen = num;
      this.reset = false;
    } else {
      this.screen += num;
      
    }
  }

  operaciones(operacion) {
    let valor = parseFloat(this.screen);
    switch (this.op) {
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
    this.op = operacion;
    this.reset = true;
    this.screen = this.acum.toString();
  }

  cambiosigno(num) {
    let valor = parseFloat(num);
    valor = -valor;
    num = valor.toString();
    this.screen = num;
    
  }

  
  retroceso(cad) {
    let tam = cad.length;
    let char = cad.substr(tam -1, tam);
    cad = cad.substr(0, tam - 1);
    
    if (cad == "" || cad.length < 1) {
      cad = "0";
    }

    this.screen = cad;
  }

  borradoTotal(cad){ 
    cad = "0";
    this.op = '+';
    this.reset = true;
    this.screen = cad;
  }
}
