import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServersComponent } from './servers.component';
import { ServerComponent } from '../server/server.component';
import { ServersRouting } from './servers-routing.module';
import { SharedModule } from '../../shared.module';
//import { GamesComponent } from '../games/games.component';

@NgModule({
    declarations: [
        ServerComponent,
        ServersComponent,
       // GamesComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        ServersRouting
    ],
    exports: [],
   // providers:[LoggingService]
})
export class ServersModule {

}