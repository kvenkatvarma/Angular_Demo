import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
Designation:string="";
UserName:string="";
NoOfTeamMembers:number=0;
TotalCostOfAllProjects:number=0;
PendingTasks:number=0;
UpComingProjects:number=0;
ProjectCost:number=0;
CurrentExpenditure:number=0;
AvailableFunds:number=0;

Clients: string[] = [];
Projects: string[] = [];
Years: number[] = [];
TeamMembersSummary: any = [];
TeamMembers: any = [];
ToDay:Date=new Date();
constructor(private dashboardService:DashboardService){

}
ngOnInit(): void {
this.Designation ="Team Leader";
this.UserName = "John Smith";
this.NoOfTeamMembers =67;
this.TotalCostOfAllProjects = 240;
this.PendingTasks =15;
this.UpComingProjects =0.2;
this.ProjectCost = 2113507;
this.CurrentExpenditure = 96788;
this.AvailableFunds = 52536;
this.ToDay = new Date();
this.Clients=["ABC Infotech Ltd.","DEF Solutions","GHI Industries"];
this.Projects=["Project A","Project B","Project C","Project D"];
for(var i= 2019;i>=2010;i--)
  {
    this.Years.push(i);
  }
  this.TeamMembersSummary =this.dashboardService.getTeamMembersSummary();
  this.TeamMembers =[
    {Region:"East",Members:[
      {ID:1,Name:"Ford",Status:"Available"},
      {ID:2,Name:"Miller",Status:"Available"},
      {ID:3,Name:"Jones",Status:"Busy"},
      {ID:3,Name:"James",Status:"Busy"}
    ]},
    {Region:"West",Members:[
      {ID:1,Name:"Didi",Status:"Available"},
      {ID:2,Name:"Benarjee",Status:"Available"},
      {ID:3,Name:"MAmata",Status:"Busy"},
      {ID:3,Name:"Mamta",Status:"Busy"}
    ]},
    {Region:"South",Members:[
      {ID:1,Name:"Ram",Status:"Available"},
      {ID:2,Name:"Krishna",Status:"Available"},
      {ID:3,Name:"Hanuman",Status:"Busy"},
      {ID:3,Name:"SAi",Status:"Busy"}
    ]},
    {Region:"North",Members:[
      {ID:1,Name:"Khan",Status:"Available"},
      {ID:2,Name:"Amir",Status:"Available"},
      {ID:3,Name:"Shah",Status:"Busy"},
      {ID:3,Name:"Ranveer",Status:"Busy"}
    ]}
  ]
}
onProjectChange($event:any)
{
  if($event.target.innerHTML == "Project A")
    {
     this.ProjectCost = 256;
     this.CurrentExpenditure = 97689;
     this.AvailableFunds = 53456;
    }
    else  if($event.target.innerHTML == "Project B")
      {
       this.ProjectCost = 246;
       this.CurrentExpenditure = 12345;
       this.AvailableFunds = 676767;
      }
      else  if($event.target.innerHTML == "Project C")
        {
         this.ProjectCost = 236;
         this.CurrentExpenditure = 98989;
         this.AvailableFunds = 88888;
        }
        else  if($event.target.innerHTML == "Project D")
          {
           this.ProjectCost = 226;
           this.CurrentExpenditure = 66666;
           this.AvailableFunds = 77777;
          }
}
}
