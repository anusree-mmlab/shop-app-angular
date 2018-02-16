import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsService } from './questions.service';

@NgModule({
    declarations: [
        QuestionsComponent,
    ],
    imports: [
        QuestionsRoutingModule,
        CommonModule
    ],
    exports: [],
    providers: [QuestionsService]
})
export class QuestionsModule {

}

