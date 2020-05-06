import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from 'src/modules/shared/services/url-config-service/url-config.service';
import {from} from 'rxjs';
import {map, tap, mergeMap, toArray} from 'rxjs/operators';

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
    const request$ = this.http.get(url).pipe(
      map(res => res['data']),
      mergeMap(dataArray => {
        return from(dataArray).pipe(
          map(data =>  this.transformCardResponseObject(data) ),
          );
      }),
      toArray(),
      tap(data => console.log('merged tap ', data)),
      map(combinedArray => {
        return {
          cards: combinedArray
        };
      })
      );
    return request$;
  }

  /**
   * Parses cards response for ui.
   * @param cardsData -> Essentially the response recieved from getcards api.
   * @returns  formatted version of cards api needed by the UI
   */
  parseCardsResponseForUI(cardsData) {
    return cardsData;
  }

  transformCardObjectHeader(cardObject) {
    const headerTemplate = {
      header: {
        blocks: []
      }
    };
    // transforming image section
    if (cardObject.hasOwnProperty('imageSrc')) {
      const imageBlock = {
        blockType: 'image',
        blockUrl: cardObject.imageSrc
      };
      headerTemplate.header.blocks.push(imageBlock);
    }
    // transforming stats section
    if (cardObject.hasOwnProperty('stats')) {
      const newStats = cardObject.stats.map(statObj => {
        return {
          blockType: 'section',
          blockText: statObj['title'] ? statObj['title'] : '',
          blockSubText: statObj['subtitle'] ? statObj['subtitle'] : ''
        };
      });
      headerTemplate.header.blocks.push(...newStats);
    }
    // transforming chart section
    if (cardObject.hasOwnProperty('chart')) {
      const newTemplate = {
        blockType: 'chart',
        url: cardObject.chart.url ? cardObject.chart.url : '',
        chartData: cardObject.chart.hasOwnProperty('data') ? {...cardObject.chart.data} : {}
      };
      headerTemplate.header.blocks.push(newTemplate);
    }
    return {...headerTemplate};
  }

  transformCardObjectBody(cardObject) {
    const bodyTemplate = {
      body: {
        question: '',
        cards: []
      }
    };
    if (cardObject.hasOwnProperty('session_question')) {
      bodyTemplate.body.question = cardObject.session_question ? cardObject.session_question : '';
    }
    if (cardObject.hasOwnProperty('session_details') && Array.isArray(cardObject.session_details)) {
      const newSessionDetails = cardObject.session_details.map(sessionObj => {
        return {
          title_text: sessionObj['title'] ? sessionObj['title'] : '',
          body_text: sessionObj['info'] ? sessionObj['info'] : '',
          view_more_link: sessionObj['view_more_link'] ? sessionObj['view_more_link'] : '',
          percentage: {
            accuracy: sessionObj['accuracy'] ? sessionObj.accuracy.value : 'NA',
            placeholder: sessionObj['accuracy'] ? sessionObj.accuracy.info : 'Overall accuracy of the section',
          },
        };
      });
      bodyTemplate.body.cards.push(...newSessionDetails);
    }
    return {...bodyTemplate};
  }

  transformCardResponseObject(cardObject) {
    const template = {
      header: {...this.transformCardObjectHeader(cardObject).header},
      body: {...this.transformCardObjectBody(cardObject).body},
    };
    console.log('transformed data as ', template);
    return template;
  }
}
