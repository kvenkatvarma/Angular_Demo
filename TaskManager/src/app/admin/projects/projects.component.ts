import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[];
  newProject:Project = new Project();
constructor(private projectsService:ProjectsService){}
ngOnInit(): void {
  this.projectsService.getAllProjects().subscribe(
   (response:Project[])=>{
    this.projects = response;
   }
  );
}

onSaveClick()
{
  this.projectsService.insertProject(this.newProject).subscribe((response)=>{
    this.projects.push(this.newProject);
    this.newProject.projectID = 0;
    this.newProject.projectName= null;
    this.newProject.dateOfStart = null;
    this.newProject.teamSize = null;
  },(error)=>{
   console.log(error);
  });
}
}
