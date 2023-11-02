import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { AuthGuard } from "./auth-guard.service";


const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent,children:[
      {path: ':id/:name', component: UserComponent},
    ]},
    {path: 'servers',
    // canActivate: [AuthGuard] ,
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children:[
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]},
  ]

// We don't need to write declarations here as it is already declared in app.module.ts
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

// When we have more than 2 or 3 routes for our Angular app we use a separate module commonly names as app-routing.module.ts where we store all our routing configurations

// In the last step we need to add our appRoutes.routing.module back to our app.module for that we do exports where we tell what need to be exported from this module
export class AppRoutingModule{

}