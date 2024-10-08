import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { ClientLocation } from '../../client-location';
import { ClientLocationsService } from '../../client-locations.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[];
  newProject:Project = new Project();
  editProject:Project = new Project();
  deleteProject:Project = new Project();
  clientLocations:ClientLocation[] =[];
  showLoading:boolean = true;
  deleteIndex:any= null;
  editIndex:number= 0;
  searchBy:string = "ProjectName";
  searchText:string="";
constructor(private projectsService:ProjectsService,private clientLocationsService:ClientLocationsService){}
ngOnInit(): void {
  this.projectsService.getAllProjects().subscribe(
   (response:Project[])=>{
    this.projects = response;
    this.showLoading = false;
   }
  );
  this.clientLocationsService.getClientLocations().subscribe(
    (response)=>{
      this.clientLocations = response;
    }
  );
}

onSaveClick()
{
  this.newProject.clientLocation.clientLocationID = 0;
  this.projectsService.insertProject(this.newProject).subscribe((response)=>{
var p:Project = new Project();
p.projectID = response.projectID;
p.projectName= response.projectName;
p.dateOfStart = response.dateOfStart;
p.teamSize = response.teamSize;
p.active = response.active;
p.clientLocationID = response.clientLocationID;
p.status = response.status;

this.projects.push(p);
this.newProject.projectID = 0;
this.newProject.projectName = null;
this.newProject.dateOfStart = null;
this.newProject.teamSize = null;
this.newProject.active = false;
this.newProject.clientLocationID = null;
this.newProject.status = null;
  },(error)=>{
   console.log(error);
  });
}
onEditClick(event:any,index:number)
{
this.editProject.projectID = this.projects[index].projectID;
this.editProject.projectName = this.projects[index].projectName;
this.editProject.dateOfStart = this.projects[index].dateOfStart;
this.editProject.teamSize = this.projects[index].teamSize;
this.editProject.active = this.projects[index].active;
this.editProject.clientLocationID = this.projects[index].clientLocationID;
this.editProject.status = this.projects[index].status;
this.editIndex = index;
}
onUpdateClick(){
this.projectsService.updateProject(this.editProject).subscribe((response:Project)=>{
var p:Project = new Project();
p.projectID = response.projectID;
p.projectName = response.projectName;
p.dateOfStart = response.dateOfStart;
p.teamSize = response.teamSize;
p.clientLocation = response.clientLocation;
p.active = response.active;
p.clientLocationID = response.clientLocationID;
p.status = response.status;
this.projects[this.editIndex]=p;

this.editProject.projectID = 0;
this.editProject.projectName = null;
this.editProject.dateOfStart = null;
this.editProject.teamSize = null;
},()=>{

});
}
onDeleteClick(event:any,index:number)
{
this.deleteIndex = index;
this.deleteProject.projectID = this.projects[index].projectID;
this.deleteProject.projectName = this.projects[index].projectName;
this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
this.deleteProject.teamSize = this.projects[index].teamSize;


}
onDeleteConfirmClick()
{
 this.projectsService.deleteProject(this.deleteProject.projectID).subscribe((response)=>{
this.projects.splice(this.deleteIndex,1);
this.deleteProject.projectID = 0;
this.deleteProject.projectName = null;
this.deleteProject.dateOfStart =null;
this.deleteProject.teamSize = null;
 },(error)=>{
console.log(error);
 });
}
onSearchClick(){
this.projectsService.SearchProjects(this.searchBy,this.searchText).subscribe((response:Project[])=>{
  this.projects=response;
},(error)=>{
console.log(error);
});
}
}
