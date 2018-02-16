import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styles : [`div {
            width:100%;
            border: solid 1px green;
            border-radius: 5px;
            padding: 10px;
            background-color: orange;
            color:purple;
        }
    `],
})
export class GamesComponent implements OnInit {
    public curDate = new Date();
    @Input() testgame:string;
    @Output() newGameAdded = new EventEmitter<any>();

    ngOnInit() {
        
    }

    addNewGame() {
        console.log('addNewGame', this.newGameAdded);
        this.newGameAdded.emit({game:'Cricket'});
    }
}