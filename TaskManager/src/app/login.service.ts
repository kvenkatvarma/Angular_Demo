import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient:HttpClient | null = null;
  constructor(private httpBackend:HttpBackend) { }

  currentUserName:any = null;
public Login(loginViewModel:LoginViewModel):Observable<any>
{
  this.httpClient = new HttpClient(this.httpBackend);//If we do not want http interceptors
return this.httpClient.post<any>("/authenticate",loginViewModel,{responseType:"json"})
.pipe(map(user=>{
if(user)
  {
    this.currentUserName = user.userName;
    sessionStorage['currentUser'] = JSON.stringify(user);
  }
  return user;
}));
}

public Logout()
{
  sessionStorage.removeItem("currentUser");
  this.currentUserName = null;
}
}
