import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { LoggingService } from '../../services/logging.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  @Output('onServerCreatedName') serverCreatedName = new EventEmitter<any>();
  serverStatusMessage : String = '<div style="color:grey">No Server Created</div>';
  //serverStatusMessage : String = 'No Server Created';
  serverName = '';
  serverCreated = false;
  servers:any = ['Server 1','Server 2', 'Server 3'];
  testArr:any = [1,2,3,4,5];
  userName:string = 'Roger';
  @ViewChild('inputServerName') inputServerName: ElementRef;
  curDate = new Date();

  constructor(private loggingService: LoggingService, private router: Router) { }

  ngOnInit() {
    const country = this.loggingService.getCountry();

    console.log('ServersComponent', 'ngOnInit', country);

    this.loggingService.setCountry('India');

    const extraParams: NavigationExtras = {queryParams : {page :1}};

    setTimeout(() => {
      //this.router.navigate(['/users',2], extraParams);
    }, 1000);

    setInterval(() => {
      this.setCurrentTime()
    }, 1000);
  }

  setCurrentTime() {
    this.curDate = new Date();
  }

  onServerCreate() {
    this.serverCreatedName.emit(this.serverName);

    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatusMessage = '<div>Server <span style="color:green">' + this.serverName + '</span>  has been created!</div>';
    //this.serverStatusMessage = this.serverName+'  has been created!';
  }

  onInputServer(value) {
    //this.serverName = value;
    this.serverName = this.inputServerName.nativeElement.value;
  }
}
