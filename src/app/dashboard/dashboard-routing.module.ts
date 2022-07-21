import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'home', loadChildren:()=> import('../home/home.module').then(m => m.HomeModule)},
      {path:'planner', loadChildren: () => import('../planner/planner.module').then(m=>m.PlannerModule)},
      {path:'profile', loadChildren: () => import('../profile/profile.module').then(m=> m.ProfileModule)},
      {path:'add-task', loadChildren: () => import('../add-task/add-task.module').then(m => m.AddTaskModule)},
      {path:'view-task/:id', loadChildren: ()=> import('../task/task.module').then(m=>m.TaskModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
