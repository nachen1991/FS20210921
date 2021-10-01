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

  cambiosigno() {
  //   let valor = parseFloat(this.screen);
  //   valor = -valor;
  //   let char= valor.toString();
  //  this.screen = char;
    this.screen = (-this.screen).toString();
    if(this.reset){
      this.acum = -this.acum;
    }
  }

  
  retroceso() {
    let tam = this.screen.length
    this.screen= this.screen.substr(0, tam - 1);
    
    if (this.screen == "") {
      this.screen = "0";
    }
    
  }

  borradoTotal(){ 
    this.screen = "0";
    this.acum = 0;
   
  }
}
