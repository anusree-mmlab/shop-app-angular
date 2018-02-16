import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { AppComponent } from './app.component';

import { testDirective } from './directives/test.directive';
import { LoggingService } from './services/logging.service';

import { UserListComponent } from './components/users/userlist.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './components/home/home.component';
//import { GamesComponent } from './components/games/games.component';

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
    //GamesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
  ],
  providers: [LoggingService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
