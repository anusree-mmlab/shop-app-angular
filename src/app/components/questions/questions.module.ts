import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionsComponent } from './questions.component';
import { NewQuestionComponent } from './new-question/newquestion.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsService } from './questions.service';

@NgModule({
    declarations: [
        QuestionsComponent,
        NewQuestionComponent,
    ],
    imports: [
        QuestionsRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [QuestionsService]
})
export class QuestionsModule {

}

