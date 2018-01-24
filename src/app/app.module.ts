import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { testDirective } from './directives/test.directive';
import { LoggingService } from './services/logging.service';
import {SafeHtmlPipe} from './pipes/dom-sanitize.pipe';
import { UserListComponent } from './components/users/userlist.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './notfound.component';

import { AppRoutesModule } from './routing.module';
import {UsersService} from './components/users/user.service';


@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    ServerComponent,
    ServersComponent,
    testDirective,
    UserListComponent,
    UserComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [LoggingService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
