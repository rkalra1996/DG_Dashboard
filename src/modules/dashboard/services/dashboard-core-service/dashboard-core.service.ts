import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UrlConfigService } from 'src/modules/shared/services/url-config-service/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardCoreService {

  constructor(
    private readonly http: HttpClient,
    private readonly apiSrvc: UrlConfigService) { }

  /**
   * Gets dashboard cards. Service to get all the dashboard related cards
   */
  getDashboardCards() {
    const url = this.apiSrvc.APIConfig.BASE + this.apiSrvc.APIConfig.API.GET_DASHBOARD_CARDS;
    return this.http.get(url);
  }
}
