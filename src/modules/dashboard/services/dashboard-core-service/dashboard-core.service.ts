import { Injectable } from '@angular/core';
import { DashboardUtilityService } from '../dashboard-utility-service/dashboard-utility.service';
import { catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardCoreService {

  // tslint:disable-next-line:variable-name
  private _subject = new Subject<any>();

  newEvent(event) {
    this._subject.next(event);
  }

  get events$() {
    return this._subject.asObservable();
  }

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
