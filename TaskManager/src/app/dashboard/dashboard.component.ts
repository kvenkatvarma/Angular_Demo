import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
Designation:string;
UserName:string;
NoOfTeamMembers:number;
TotalCostOfAllProjects:number;
PendingTasks:number;
UpComingProjects:number;
ProjectCost:number;
CurrentExpenditure:number;
AvailableFunds:number;
constructor()
{
  this.Designation = "";
  this.UserName = "";
  this.NoOfTeamMembers = 0;
  this.TotalCostOfAllProjects = 240;
this.PendingTasks =15;
this.UpComingProjects =2;
this.ProjectCost = 2113507;
this.CurrentExpenditure = 96788;
this.AvailableFunds = 52536;
}
ngOnInit(): void {
this.Designation ="Team Leader";
this.UserName = "John Smith";
this.NoOfTeamMembers =67;
this.TotalCostOfAllProjects = 240;
this.PendingTasks =15;
this.UpComingProjects =2;
this.ProjectCost = 2113507;
this.CurrentExpenditure = 96788;
this.AvailableFunds = 52536;

}

}
