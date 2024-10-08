import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
constructor(private httpClient:HttpClient) { }

getAllProjects():Observable<Project[]>{

  return this.httpClient.get<Project[]>("api/projects",{responseType:"json"}).pipe(map((data:Project[])=>{
    for(let i=0;i<data.length;i++)
      {
       // data[i].teamSize =data[i].teamSize * 100;
      }
    return data;
  }));
}

insertProject(newProject:Project):Observable<Project>{
  var requestHeaders= new HttpHeaders();
 // requestHeaders.set("X-XSRF-TOKEN",sessionStorage["XSRFRequestToken"]);
  return this.httpClient.post<Project>("api/projects",newProject,{responseType:"json"});
}

updateProject(existingProject:Project):Observable<Project>{
  return this.httpClient.put<Project>("api/projects",existingProject,{responseType:"json"});
}

deleteProject(ProjectID:number):Observable<string>{
  return this.httpClient.delete<string>("api/projects?ProjectID =" + ProjectID);
}

SearchProjects(searchBy:string,searchText:string):Observable<Project[]>{
  return this.httpClient.get<Project[]>("api/projects/search/" + searchBy + "/" + searchText,{responseType:"json"});
}


}
