import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

  private readonly config = {
    BASE: 'https://extendsclass.com/api/json-storage/bin',
    API: {
        GET_DASHBOARD_CARDS: '/fcddbfd',
    },
};
  constructor() { }

  get APIConfig() {
    return this.config;
  }
}
