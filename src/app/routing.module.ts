
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { UserListComponent } from './components/users/userlist.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './components/home/home.component';

//import { ServersModule } from './components/servers/servers.module';


const appRoutes: Routes = [
    //{path:"", redirectTo:"/servers", pathMatch:"full"},
    {path: "", component:HomeComponent},
   // {path:"servers", component:ServersComponent},
   {path:"servers", loadChildren: './components/servers/servers.module#ServersModule'},
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