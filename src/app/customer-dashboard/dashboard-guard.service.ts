import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginCheckService } from '../login-dashboard/loginService/login-check.service';

@Injectable()
export class DashboardGuardService implements CanActivate{

  constructor(private loginCheckService:LoginCheckService) {
    console.log('dashboard constructor');
   }

  
  canActivate() {
    console.log('Dashboard activate value'+this.loginCheckService.isLoggedIn());
    return this.loginCheckService.isLoggedIn(); 
  }
}
