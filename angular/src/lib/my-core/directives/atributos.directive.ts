import { Directive, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({ selector: `[myWinConfirm]` })
export class WindowConfirmDirective {
  @Output('myWinConfirm') winConfirm: EventEmitter<any> = new EventEmitter();
  @Input('myWinConfirmMessage') winConfirmMessage = '¿Seguro?';
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() { this.isPressed = true; }
  @HostListener('mouseup') hasReleased() { this.isPressed = false; }
}

@Directive({ selector: '[show]' })
export class ShowDirective {
  @HostBinding('hidden') hidden: boolean = false;
  @Input('show') set show(value: boolean) { this.hidden = !value; }
}
@Directive({selector: '[showErrors]'})
export class ShowErrorsDirective implements OnChanges{

  @Input('showErrors') message: any = undefined;
  @Input('textContext') mensaje: string='';
  @HostBinding('hidden') hidden: boolean = false;

  ngOnChanges(changes:SimpleChanges):void{
    if(!this.message){
      this.hidden = true;
      return;
    }
    let m ='';

     for(let msg of Object.keys(this.message)){
        switch(msg){
          case 'max':
            m += `El maximo es ${this.message[msg].max}`;
            break;
          case 'min':
            m+=  `El minimo es ${this.message[msg].min}`;
            break;
          case 'maxlength':
            m +=  `El maximo de caracteres es ${this.message[msg].requiredLength}`;
            break;
          case 'minlength':
            m +=  `El minimo de caracteres es ${this.message[msg].requiredLength}`;
            break;
          case 'required':
            m += `Es obligatorio. `;
            break;
          case 'email':
            m += 'No es un correo valido';
            break;
          default:
            if (typeof this.message[msg] === 'string')
            m += `${this.message[msg]}. `;
          else if (typeof this.message[msg]?.message === 'string')
            m += `${this.message[msg].message}. `;
            break;
        }

    }
    this.mensaje = m.trim();
    this.hidden = this.mensaje ==='';
  }
  json() {
    return JSON.stringify(this.message);
  }

}
export const DIRECTIVAS_ATRIBUTO = [WindowConfirmDirective, ShowDirective, ShowErrorsDirective,]
