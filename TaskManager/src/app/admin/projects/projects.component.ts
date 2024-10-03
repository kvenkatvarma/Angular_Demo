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
constructor(private projectsService:ProjectsService){}
ngOnInit(): void {
  this.projectsService.getAllProjects().subscribe(
   (response:Project[])=>{
    this.projects = response;
   }
  );
}
}
