import { Component } from '@angular/core';

@Component({
    selector : 'app-home',
    templateUrl: './home.component.html'
    /* template : `
   
    <div>
        <h2>Welcome to Home Page</h2>
    </div>
    ` */
})
export class HomeComponent {
    public game:string =  'Football';
    public receivedGame:string;

    onNewGame(value) {
        console.log('New game', value);
        this.receivedGame = value.game;
    }
}