import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from 'src/modules/shared/services/url-config-service/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardUtilityService {

  constructor(
    private readonly http: HttpClient,
    private readonly apiSrvc: UrlConfigService) { }

  /**
   * Hits dashboard get cards api.
   * @returns  Observable of type HttpResponse
   */
  hitDashboardGetCardsAPI() {
    const url = this.apiSrvc.APIConfig.BASE + this.apiSrvc.APIConfig.API.GET_DASHBOARD_CARDS;
    return this.http.get(url);
  }

  /**
   * Parses cards response for ui.
   * @param cardsData -> Essentially the response recieved from getcards api.
   * @returns  formatted version of cards api needed by the UI
   */
  parseCardsResponseForUI(cardsData) {
    return cardsData;
  }
}
