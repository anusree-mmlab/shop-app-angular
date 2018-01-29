import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersComponent } from './servers.component';

const serverRoutes: Routes = [
    {path:"", component:ServersComponent},
];


@NgModule({
    imports: [RouterModule.forChild(serverRoutes)],
    exports: [RouterModule]
})
export class ServersRouting {

}