import { Component,OnInit,AfterContentInit,AfterContentChecked } from '@angular/core';
import { LoginCheckService } from 'app/login-dashboard/loginService/login-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Product Management!';
  myname : string = ' By somnath';
  headerlogo :string='../assets/logo.png';
  cssClass='';
  logo:string;
  imageCount:any;
  city:''

  constructor(private logincheckservice:LoginCheckService){
      this.imageCount=0;
      this.logincheckservice.createSubjectAsObservable().subscribe((data)=>{
          this.city = data;
      },(error)=>{
        console.log(error)
      })
  }

  sliderRun():void{
    this.cssClass='';
    switch(this.imageCount){
     
      case 0:{
        this.cssClass="one";
        this.logo ="../assets/test_"+this.imageCount+".jpg";
        break;
      }
      case 1:{
        this.cssClass="two";
        this.logo ="../assets/test_"+this.imageCount+".jpg";
        break;
      }
      case 2:{
        this.cssClass="three";
        this.logo ="../assets/test_"+this.imageCount+".jpg";
        break;
      }
  
    }
    console.log(this.imageCount);
   
  }
  ngOnInit(){
    console.log('dsf'+this.logincheckservice.isLoggedIn())
    setInterval(()=>{  if(this.imageCount < 3){ 
      this.sliderRun();  this.imageCount++;}else{this.imageCount=0;}
    },3000);
  }

}
