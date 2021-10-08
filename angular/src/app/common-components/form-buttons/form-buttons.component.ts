import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {
  @Input('send-disabled') sendDisabled: boolean | null = false;
  @Output() send: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel :EventEmitter<any>= new EventEmitter<any>();

  enviar() : void { this.send }
  volver() : void { this.cancel}


  ngOnInit(): void {
  }

}
