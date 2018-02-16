import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { SafeHtmlPipe} from './pipes/dom-sanitize.pipe';
import { GamesComponent } from './components/games/games.component';

@NgModule({
    declarations:[
        SafeHtmlPipe,
        GamesComponent,
    ],
    imports:[
        CommonModule
    ],
    exports :[
        SafeHtmlPipe,
        GamesComponent,
        
    ]
})
export class SharedModule {

}