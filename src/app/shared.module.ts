import { NgModule } from '@angular/core';

import { SafeHtmlPipe} from './pipes/dom-sanitize.pipe';

@NgModule({
    declarations:[SafeHtmlPipe],
    imports:[

    ],
    exports :[
        SafeHtmlPipe,
    ]
})
export class SharedModule {

}