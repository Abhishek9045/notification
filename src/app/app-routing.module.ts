import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  {path:"",component:LoginComponent},

  {path:"login",component:LoginComponent},
  {path:"admindashboard",component:AdmindashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"registration", component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
