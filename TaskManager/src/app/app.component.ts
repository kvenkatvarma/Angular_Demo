import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myProperty:any=null;
constructor(public loginService:LoginService,private domSanitizer:DomSanitizer)
{
  this.myProperty =this.domSanitizer.bypassSecurityTrustHtml("<iframe src='http://www.lipsum.com'></iframe>");
}

}
