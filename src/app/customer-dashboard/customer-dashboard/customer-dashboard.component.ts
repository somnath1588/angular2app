import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  listDashboardUser:any=[];
  constructor() { }

  ngOnInit() {
    console.log('dashboard customer component')
    this.listDashboardUser=JSON.parse(localStorage.getItem('loginUsers'));
  }

}
