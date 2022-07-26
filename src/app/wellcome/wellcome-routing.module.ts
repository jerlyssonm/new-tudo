import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './wellcome.component';

const routes: Routes = [
  {path:'', component: WellcomeComponent},
  {
    path:'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register',
    loadChildren: () => import('../register/register.module').then(m =>m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellcomeRoutingModule { }
