import { Component } from '@angular/core';

@Component({
    selector : "app-server",
    //selector : ".app-server",
    templateUrl: "./server.component.html"
})
export class ServerComponent {
    serverName : String = 'My server';
    status: String = 'Offline';

    constructor() {
        this.status = Math.random() > .5 ? 'Online' : 'Offline';
    }

    getColor() {
        return this.status === 'Online' ? 'green' : 'red';
    }
}