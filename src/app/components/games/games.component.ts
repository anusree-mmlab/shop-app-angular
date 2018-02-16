import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
    @Output() newGameAdded :EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('gameval') gameValInput: ElementRef;
    public newVal:string;

    ngOnInit() {
        
    }

    addNewGame() {
        this.newVal = this.gameValInput.nativeElement.value;
        console.log('ViewChild value>>>>', this.newVal);

        this.newGameAdded.emit({game:this.newVal});
    }


}