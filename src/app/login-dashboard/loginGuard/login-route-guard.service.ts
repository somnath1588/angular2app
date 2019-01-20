import { Injectable } from '@angular/core';
import { CanActivate  } from '@angular/router';
import { LoginCheckService} from '../loginService/login-check.service'
 
@Injectable()
export class LoginRouteGuardService implements CanActivate {

  constructor(private loginCheckService:LoginCheckService) { }

  canActivate() {
    console.log(this.loginCheckService.isLoggedIn());
    return this.loginCheckService.isLoggedIn(); 
  }

}
