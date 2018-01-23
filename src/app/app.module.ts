import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { testDirective } from './directives/test.directive';
import { LoggingService } from './services/logging.service';
import {SafeHtmlPipe} from './pipes/dom-sanitize.pipe';
const appRoutes: Routes = [
  {path:"", component:ServersComponent},
  {path:"servers", component:ServersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    ServerComponent,
    ServersComponent,
    testDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
