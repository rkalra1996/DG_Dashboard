import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-core',
  templateUrl: './dashboard-core.component.html',
  styleUrls: ['./dashboard-core.component.scss']
})
export class DashboardCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerStateSelect(event) {
    console.log('state select recieved in dashboard as ', event);
  }

}
