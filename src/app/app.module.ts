import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthServce } from './auth.service';
import { AuthGuard } from './auth-guard.service';

// To inform Angular about the routes our application has we define all routes in app.module.ts
// Above the @NgModule decorator we write appRoutes of Routes type which is imported from @angular/router
// This cont variable holds an array because we will have multiple routes.Each route now inside the array is a js object

// To configure a route we have to follow a specific pattern/structure to make Angular able to use it .i.e. 
// {
//   path: "What gets entered in the url after your domain .It is of type string.Note we do not write or add / before the path here .i.e. /users is not correct we need to write users only",
//   component: UserComponent
// }

// The path property here allows Angular to determine which route in our array should be selected if we enter something in url or click some link.

// Now that we have the path we need to tell Angular that once this path is reached a certain component should be loaded which form the page to be loaded

// Child Routing
// To add child routes we need to add another key to the js object which is "children" now this key takes an array of similar js object with path being nested 
// Now in the next step after we have created child routes we will go to the components which become the parent routes like "/users" and "/servers" there we will add router-outlet component like the way we did in app.component.html


// Now we the above steps Angular will not do anything just ignore the routes so we need to register these routes in our appRoutes.This we do by adding a new import in the imports array which is RouterModule to be imported from @angular/router.Now we are adding the routing functionality to our app but still our app is not registered for that we need to use a functipn of RouterModule which is forRoot() that allows us to register some routes for our main application,It takes the appRoutes as argument.Now Angular knows our routes.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthServce, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
