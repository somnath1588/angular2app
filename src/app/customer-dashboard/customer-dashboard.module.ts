import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerDashboardRoutingModule} from './customer-dashboard-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  imports: [
    CommonModule,CustomerDashboardRoutingModule
  ],
  declarations: [CustomerDashboardComponent],
  exports:[CustomerDashboardComponent]
})
export class CustomerDashboardModule { }
