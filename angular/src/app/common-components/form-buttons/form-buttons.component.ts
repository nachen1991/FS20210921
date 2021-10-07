import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {
  @Output() send = new EventEmitter();
  @Output() cancel = new EventEmitter();

  enviar() : void { this.send }
  volver() : void { this.cancel}


  ngOnInit(): void {
  }

}
