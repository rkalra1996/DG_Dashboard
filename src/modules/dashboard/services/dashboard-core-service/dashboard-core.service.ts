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
    const response$ = this.dUSrvc.hitDashboardGetCardsAPI();
    const transformedResponse$ = response$.pipe(this.dUSrvc.parseCardsResponseForUI());
    return transformedResponse$;
  }
}
