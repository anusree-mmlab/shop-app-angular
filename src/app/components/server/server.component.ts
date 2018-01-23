import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
    selector : "app-server",
    //selector : ".app-server",
    templateUrl: "./server.component.html",
    styles: [`
    .serverInfo {
        color : white;
    }`]
})
export class ServerComponent implements OnInit {
    @Input() user:string;
    serverName : string = 'My server';
    status: string = 'Offline';


    constructor(private loggingService: LoggingService) {
        this.status = Math.random() > .5 ? 'Online' : 'Offline';
    }

    getColor() {
        return this.status === 'Online' ? 'green' : 'red';
    }

    ngOnInit()  {
        this.loggingService.logToConsole('ServerComponent', 'ngOnInit',  this.user );

        const country = this.loggingService.getCountry();
        console.log('ServerComponent', 'ngOnInit', country);
    }
}