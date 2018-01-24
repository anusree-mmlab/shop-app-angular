
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserListComponent } from './components/users/userlist.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './notfound.component';

const appRoutes: Routes = [
    {path:"", redirectTo:"/servers", pathMatch:"full"},
    {path:"servers", component:ServersComponent},
    {path:"users", component:UserListComponent,children: [
      {path: ':id', component : UserComponent, data : {test:'abc'}}
    ]},
    {path:'page-not-found', component : NotFoundComponent},
    {path:'**', redirectTo : '/page-not-found'}
  ];

@NgModule({
    imports : [ RouterModule.forRoot(appRoutes, {useHash: true})],
    exports : [RouterModule]
})

export class AppRoutesModule {

}