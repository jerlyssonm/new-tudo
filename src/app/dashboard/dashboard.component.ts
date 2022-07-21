import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AddTaskComponent } from '../add-task/add-task.component';
import { HomeComponent } from '../home/home.component';
import { PlannerComponent } from '../planner/planner.component';
import { ProfileComponent } from '../profile/profile.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(router: Router) {
    router.events
    .pipe(filter((event:any)=> event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd | any) => {
      switch (event.url) {
        case '/dashboard':
          HomeComponent;
          break;

        case '/planner':
          PlannerComponent;
          break;
        
        case '/profile':
          ProfileComponent;
          break;
      
        case '/add-task':
          AddTaskComponent;
          break;  

        case '/view-task':
          TaskComponent;
          break;  
      }
    })
   }
  ngOnInit(): void {
  }

}
