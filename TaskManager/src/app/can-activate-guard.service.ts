import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate {

  constructor(private loginService:LoginService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot):boolean {
    console.log(this.router.url);
    if(this.loginService.isAuthenticated())
      {
        return true;
      }
      else{
        this.router.navigate(["login"]);
        return false;
      }
  }
}
