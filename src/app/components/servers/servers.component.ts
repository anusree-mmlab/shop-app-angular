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

  constructor() { }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverStatusMessage = '<div>Server <span style="color:green">' + this.serverName + '</span>  has been created!</div>';
  }

  onInputServer(event) {
    this.serverName = event.target.value;
  }
}
