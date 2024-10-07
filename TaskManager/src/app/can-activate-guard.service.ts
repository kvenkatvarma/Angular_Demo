import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate {

  constructor(private loginService:LoginService,private router:Router,private jwtHelperService:JwtHelperService) { }
  canActivate(route:ActivatedRouteSnapshot):boolean {
    var token = sessionStorage.getItem("currentUSer") ? JSON.parse(sessionStorage.getItem("currentUSer") as string).token:null;
    console.log(this.router.url);
    if(this.loginService.isAuthenticated() || this.jwtHelperService.decodeToken(token).role == route.data["expectedRole"])
      {
        return true;
      }
      else{
        this.router.navigate(["login"]);
        return false;
      }
  }
}
