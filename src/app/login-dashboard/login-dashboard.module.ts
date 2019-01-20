import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginDashboardRoutingModule} from './login-dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component'

@NgModule({
  imports: [
    CommonModule,LoginDashboardRoutingModule,FormsModule
  ],
  declarations: [LoginDashboardComponent, HomeDashboardComponent],
  exports:[HomeDashboardComponent]
})
export class LoginDashboardModule { }
