import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { DashboardGuardService } from './dashboard-guard.service';
const routes: Routes = [
    {
      path: 'dashboard',
      component: CustomerDashboardComponent,
      canActivate:[DashboardGuardService]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[DashboardGuardService]
  })
  export class CustomerDashboardRoutingModule { }