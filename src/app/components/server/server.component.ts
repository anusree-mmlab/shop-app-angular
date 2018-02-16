import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
    selector : "app-server",
    //selector : ".app-server",
    templateUrl: "./server.component.html",
    styles: [`
    .serverInfo {
        color : white;
    }`],
})
export class ServerComponent implements OnInit {
    @Input() user:string;
    @Input() serverName:any;
    //serverName : string = 'My server';
    status: string = 'Offline';


    constructor(private loggingService: LoggingService) {
        this.status = Math.random() > .5 ? 'Online' : 'Offline';
    }

    getColor() {
        return this.status === 'Online' ? 'green' : '#cc0000';
    }

    getFontColor() {
        return this.status === 'Online' ? 'white' : '#00cccc';
    }

    ngOnInit()  {
        this.loggingService.logToConsole('ServerComponent', 'ngOnInit',  this.user );

        const country = this.loggingService.getCountry();
        console.log('ServerComponent', 'ngOnInit', country, this.serverName);
    }
}