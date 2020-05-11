import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

  private readonly config = {
    BASE: environment['HOST'],
    API: {
      PREFIX: '/api/v1',
      GET_DASHBOARD_CARDS: '/json/fcddbfd',
    },
};
  constructor() {
    console.log('recieved environment as ', environment);
  }

  get APIConfig() {
    return  {
      hostPoint: `${this.config.BASE}${this.config.API.PREFIX}`,
      ...this.config,
    };
  }
}
