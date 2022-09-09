import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';


const ALERTS: string[] = [
  'prova',
  'prova2',
  'prova3'
];

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit, OnChanges {

  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit(): void {
  }

  close() {
    // this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("qui dentro");
  }
}
