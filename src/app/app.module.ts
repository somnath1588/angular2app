import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { LoginDashboardModule } from './login-dashboard/login-dashboard.module';
//import { LoginCheckService } from './login-dashboard/loginService/login-check.service';
//import { ErrorInterceptor } from './components/_helpers/error.interceptor'


const appRoutes: Routes = [
  {
     path: 'dashboard', 
     loadChildren: 'app/customer-dashboard/customer-dashboard.module#CustomerDashboardModule' 
  },
  {
    path:'login',
    loadChildren:'app/login-dashboard/login-dashboard.module#LoginDashboardModule'
  }
 
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpModule,
    CustomerDashboardModule,
    LoginDashboardModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true } // <-- debugging purposes only
)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 