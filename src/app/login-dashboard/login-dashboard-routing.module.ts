import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { HomeDashboardComponent} from './home-dashboard/home-dashboard.component';
import { LoginCheckService } from './loginService/login-check.service';
import {LoginRouteGuardService} from './loginGuard/login-route-guard.service'
const routes: Routes = [
    {
      path: 'login',
      component: LoginDashboardComponent,
    
    },
    {
      path:'home',
      component:HomeDashboardComponent,
      canActivate:[LoginRouteGuardService]
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[LoginCheckService,LoginRouteGuardService]
  })

  export class LoginDashboardRoutingModule{}