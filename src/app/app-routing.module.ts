import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'/wellcome', pathMatch: 'full'},
  { path:'wellcome', loadChildren: () => import('./wellcome/wellcome.module').then(m => m.WellcomeModule)},
  { path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
