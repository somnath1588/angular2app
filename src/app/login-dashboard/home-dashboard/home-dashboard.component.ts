import { Component, OnInit } from '@angular/core';
import { Router,Routes} from '@angular/router';
import { LoginCheckService} from '../loginService/login-check.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  currentUser;
  constructor(private route:Router,private loginCheckService:LoginCheckService) { }

  ngOnInit() {
      this.currentUser= localStorage.getItem('currentUser');
  }

  logOut(){
    console.log(this.currentUser);
    var val = this.loginCheckService.isLoggedOut();
    if(val==true){
    this.route.navigate(['/login']);
    }
  }
}
