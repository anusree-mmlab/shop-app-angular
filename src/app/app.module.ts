import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { testDirective } from './directives/test.directive';
import { LoggingService } from './services/logging.service';

import { UserListComponent } from './components/users/userlist.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutesModule } from './routing.module';
import {UsersService} from './components/users/user.service';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    testDirective,
    UserListComponent,
    UserComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [LoggingService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
