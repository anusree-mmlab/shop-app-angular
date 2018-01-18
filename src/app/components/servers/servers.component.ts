import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverStatusMessage : String = '<div style="color:grey">No Server Created</div>';
  serverName = '';
  serverCreated = false;
  servers:any = ['Server 1','Server 2', 'Server 3'];
  testArr:any = [1,2,3,4,5];
  userName:string = 'Roger';

  constructor() { }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatusMessage = '<div>Server <span style="color:green">' + this.serverName + '</span>  has been created!</div>';
  }

  onInputServer(event) {
    this.serverName = event.target.value;
  }
}
