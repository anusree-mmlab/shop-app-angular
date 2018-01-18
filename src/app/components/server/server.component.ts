import { Component, Input, OnInit } from '@angular/core';

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


    constructor() {
        this.status = Math.random() > .5 ? 'Online' : 'Offline';
    }

    getColor() {
        return this.status === 'Online' ? 'green' : 'red';
    }

    ngOnInit()  {
        console.log('User from parent component', this.user);
    }
}