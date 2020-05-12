import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DashboardCoreService } from '../../services/dashboard-core-service/dashboard-core.service';
import { Subscription } from 'rxjs';
import { DashboardCardsUIResponseInterface } from '../../interfaces/response-interfaces/dashboard-cards-ui-response-interface';
import { GenericCardInterface } from '../../interfaces/stats-viewer-interfaces/generic-card-interface';
import { GlobalCardInterface } from '../../interfaces/card-interfaces/global-card-interface';
import { HeaderMiddleSectionComponent } from 'src/modules/shared/components/header-middle-section/header-middle-section.component';


@Component({
  selector: 'app-dashboard-core',
  templateUrl: './dashboard-core.component.html',
  styleUrls: ['./dashboard-core.component.scss']
})
export class DashboardCoreComponent implements OnInit, OnDestroy {

  // inputValue: string;

  // @Input()
  // second: HeaderMiddleSectionComponent;

  dashboardCardSub: Subscription;
  serverCards: Array<GlobalCardInterface>;
  serverStats: Array<GenericCardInterface>;

  constructor(private readonly dcSrvc: DashboardCoreService) { }


  ngOnInit(): void {

    this.dashboardCardSub = this.dcSrvc.getDashboardCards().subscribe((response: DashboardCardsUIResponseInterface) => {
      console.log('recieved response from the server ', response);
      this.serverCards = this.modifyChartsInfo([...response.cards]);
      console.log('modified cards now look like ', this.serverCards);
      this.serverStats = [...response.stats];
    }, error => {
      console.error('An error occured while fetching dashboard cards from the server ', error);
    });
  }

  modifyChartsInfo(cardsArray) {
    return cardsArray.map((card, index) => {
      return {
        ...card,
        chart: {id: index, data: [...card.chart]},
      };
    });
  }


  triggerStateSelect(event) {
    console.log('state select recieved in dashboard as ', event);
    // this.dcSrvc.triggerStateSelect();
    this.dcSrvc.newEvent(event);
  }

  ngOnDestroy() {
    this.dashboardCardSub.unsubscribe();
  }

}
