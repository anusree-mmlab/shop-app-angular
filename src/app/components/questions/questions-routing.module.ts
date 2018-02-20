import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {QuestionsComponent} from './questions.component';
import { NewQuestionComponent } from './new-question/newquestion.component';


const routes: Routes = [
   /*  {path: "", component:QuestionsComponent, children:[
        {path: "new-question", component: NewQuestionComponent}
    ]} */

    {path: "", component:QuestionsComponent},
    {path: "new-question", component: NewQuestionComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class QuestionsRoutingModule {

}