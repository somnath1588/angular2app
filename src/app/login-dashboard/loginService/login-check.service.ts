import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginCheckService  {
  
  currentUser:string;
  ListUser:any[];
  UserLoggedIn:boolean=false;
  user : string;
  constructor() { 
    this.user='';
  }

  //subject to transfer data between two different component
   subjectObj = new Subject<any>();

   //make as asObservable
   createSubjectAsObservable(){
     return this.subjectObj.asObservable();
   }

  //store session
  storeUserOneSession(val){
     localStorage.setItem('currentUser',val);
  }

  //check userLogged in or not
  isLoggedIn(){
    this.user = localStorage.getItem('currentUser');
    if(this.user !=null && this.user !=undefined){
      this.UserLoggedIn = true;
    }
    return this.UserLoggedIn;
  }

  isLoggedOut(){
    localStorage.removeItem('currentUser');
    return true;
  }

  //remove session
  removeUserOneSession(){
    localStorage.removeItem('currentUser');
    this.UserLoggedIn=false;
  }

}
