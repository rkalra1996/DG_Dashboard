import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

  private readonly config = {
    BASE: 'https://my-json-server.typicode.com/rkalra1996/DG-client-dashboard-dummy-server',
    API: {
        GET_DASHBOARD_CARDS: '/dashboard',
    },
};
  constructor() { }

  get APIConfig() {
    return this.config;
  }
}
