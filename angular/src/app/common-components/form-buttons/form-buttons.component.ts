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
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  get hasSend(): boolean { return this.send.observers.length > 0; }
  get hasCancel(): boolean { return this.cancel.observers.length > 0; }
  get hasDelete(): boolean { return this.delete.observers.length > 0; }
  ngOnInit(): void {
  }

}
