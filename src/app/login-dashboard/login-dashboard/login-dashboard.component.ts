import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router,Routes} from '@angular/router';
import { LoginCheckService } from '../loginService/login-check.service';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent implements OnInit{

  //get the form reference
  @ViewChild('Loginform') loginform:ElementRef;

  User:any={};
  ListUser:any=[];
  username:string='type your value';
  submitted:boolean=false;
  constructor(private route : Router,private loginCheckService :LoginCheckService) {
    this.User={
      email:'',
      password:''
    }
    console.log('Service login'+loginCheckService.isLoggedIn())
   }

  ngOnInit() {
    this.getUsers();
   
  }

  sendDatacity(val){
    this.loginCheckService.subjectObj.next(val);
    this.loginCheckService.subjectObj.error('catch error');

  }
  getUsers(){
    var item = localStorage.getItem('loginUsers');
    if(item.length > 0){
      this.ListUser = JSON.parse(localStorage.getItem('loginUsers'));
      console.log(this.ListUser);
    }
  }
  onSave(formValues:any,myform:any){

    this.loginCheckService.storeUserOneSession(formValues.name);
    this.ListUser.push(formValues);
    localStorage.setItem('loginUsers',JSON.stringify(this.ListUser));
    myform.reset();
    this.submitted=true;
    setTimeout(()=>{this.submitted=false;},10000);
    this.route.navigate(['/home']);
  }


  ngAfterViewInit(){
    //render Dom of login form
    console.log(this.loginform.nativeElement);
  }
  
}
