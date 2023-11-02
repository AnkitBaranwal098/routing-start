// The main purpose of these guards is to guard certain actions like navigating to around or away from it

// CanActivate is an interface that forces us to have a canActivate method in the class

// canActivate method takes two arguments route of type ActivatedRouteSnapshot and another is the state of type RouterStateSnapshot

// ActivatedRouteSnapshot contains the information about a route associated with a component loaded in an outlet at a particular moment in time

// RouterStateSnapshot represents the state of the router at a moment in time

// canActivate method returns a boolean result observables of boolean type or a promise that will result to boolean values or a simply boolean value

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServce } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthServce, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated) => {
      if (authenticated) return true;
      else this.router.navigate(['/']);
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
