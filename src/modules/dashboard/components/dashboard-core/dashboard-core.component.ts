import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardCoreService } from '../../services/dashboard-core-service/dashboard-core.service';
import { Subscription } from 'rxjs';
import {GlobalCardInterface} from './../../interfaces/card-interfaces/global-card-interface';

interface DashboardCardsResponse {
  cards: Array<GlobalCardInterface>;
}

@Component({
  selector: 'app-dashboard-core',
  templateUrl: './dashboard-core.component.html',
  styleUrls: ['./dashboard-core.component.scss']
})
export class DashboardCoreComponent implements OnInit, OnDestroy {

  dashboardCardSub: Subscription;
  serverCards: any[];

  constructor(private readonly dcSrvc: DashboardCoreService) { }

  ngOnInit(): void {
    
    this.dashboardCardSub = this.dcSrvc.getDashboardCards().subscribe((response: DashboardCardsResponse) => {
      console.log('recieved response from the server ', response);
      this.serverCards = [...response.cards];
    }, error => {
      console.error('An error occured while fetching dashboard cards from the server ', error);
    });
  }

  triggerStateSelect(event) {
    console.log('state select recieved in dashboard as ', event);
  }

  ngOnDestroy() {
    this.dashboardCardSub.unsubscribe();
  }

}
