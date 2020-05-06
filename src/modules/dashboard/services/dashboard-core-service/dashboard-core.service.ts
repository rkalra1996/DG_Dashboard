import { Injectable } from '@angular/core';
import { DashboardUtilityService } from '../dashboard-utility-service/dashboard-utility.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardCoreService {

  constructor(private readonly dUSrvc: DashboardUtilityService) { }

  /**
   * Gets dashboard cards. Service to get all the dashboard related cards
   */
  getDashboardCards() {
    return this.dUSrvc.hitDashboardGetCardsAPI().pipe(map(response => {
      console.log('recieved response as ', response);
      // parse the result
      return this.dUSrvc.parseCardsResponseForUI(response);
    }));
  }
}
