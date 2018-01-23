import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service';

declare var io: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [LoggingService]
})
export class AppComponent implements OnInit{
  serverHead = 'app';
  testHtml = '<div style="border:solid 1px" >ABCD</div>';
  itemClickVal = false;
  socketUsername = '';
  serverMessage = '';
  //@Output() serverMessageReceived = new EventEmitter<any>();

  constructor(private loggingService: LoggingService) {

  }

  swapTDisplay(tvar) {
    console.log(tvar);
  }

  addNameToHeader(serverName: any) {
    this.loggingService.logToConsole('AppComponent', 'addNameToHeader', serverName );
    this.serverHead = serverName;
  }

  ngOnInit() {
    const country = this.loggingService.getCountry();
    console.log('AppComponent', 'ngOnInit', country);

    this.loggingService.setCountry('Germany');
  }

  onHClick(event) {
    this.itemClickVal = !this.itemClickVal;

    console.log('click value=', this.itemClickVal );
  }

  login() {
    var socket = io('http://localhost:4005');
    socket.emit('join', this.socketUsername);

    socket.on('privateMessage', (data) => {
      console.log('on private message received', data);
      this.serverMessage = data;
      //this.serverMessageReceived.emit(data);
    });
  }
}
