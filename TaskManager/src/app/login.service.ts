import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient:HttpClient | null = null;
  constructor(private httpBackend:HttpBackend,private jwtHelperService:JwtHelperService) { }

  currentUserName:any = null;
public Login(loginViewModel:LoginViewModel):Observable<any>
{
  this.httpClient = new HttpClient(this.httpBackend);//If we do not want http interceptors
return this.httpClient.post<any>("/authenticate",loginViewModel,{responseType:"json",observe:"response"})
.pipe(map(response=>{
if(response)
  {
    this.currentUserName = response.body.userName;
    sessionStorage['currentUser'] = JSON.stringify(response.body);
    sessionStorage["XSRFRequestToken"] = response.headers.get("XSRF-REQUEST-TOKEN");
  }
  return response.body;
}));
}

public Logout()
{
  sessionStorage.removeItem("currentUser");
  this.currentUserName = null;
}
public isAuthenticated():boolean{
  var token = sessionStorage.getItem("currentUSer") ? JSON.parse(sessionStorage.getItem("currentUser") as string).token : null;
  if(this.jwtHelperService.isTokenExpired())
    {
  return false;//token is not valid
    }
    else{return true;}
}
}
