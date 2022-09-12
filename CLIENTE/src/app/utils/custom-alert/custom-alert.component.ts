import { Component, OnInit } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import { CallApiService } from 'src/app/service/call-api.service';


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
export class CustomAlertComponent implements OnInit {

  alertsList: Array<string> = [];
  alerts: Array<string> = [];
  countDown: number = 0;
  myTimeOut: any;

  constructor(alertConfig: NgbAlertConfig, private service: CallApiService) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
    this.service.popolaAlertArray.subscribe((value)=>{
      this.addAlert(value);
    })
  }

  ngOnInit(): void { }

  addAlert(value: any): void {
    clearTimeout(this.myTimeOut);
    this.alerts = this.alerts.concat(value);
    this.deleteAlert();
  }

  deleteAlert(){
    this.myTimeOut = setTimeout(()=>{
      this.alerts = [];
    },5000)
  }
}
