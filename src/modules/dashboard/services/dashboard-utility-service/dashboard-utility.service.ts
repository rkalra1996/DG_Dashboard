import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from 'src/modules/shared/services/url-config-service/url-config.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DashboardCardAPIResponseInterface } from '../../interfaces/response-interfaces/dashboard-card-api-response';

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
  parseCardsResponseForUI = () => (source: Observable<DashboardCardAPIResponseInterface>) => {
    return new Observable(observer => {
      return source.pipe(
        map(value => {
          return value['data'];
        }),
        map(originalData =>  this.transformCardResponseObject(originalData) )
      ).subscribe({
          next(data) {
            console.log('recieved data inside operator as ', data);
            observer.next({
              stats: [ ...data['stats'] ],
              cards: [ ...data['cards'] ],
            });
          },
          error(e) {
            observer.error(e);
          },
          complete() {
            observer.complete();
          }
      });
    });
  }

  transformDataForStats(cardObject) {
    const headerTemplate = {
      stats: [],
    };
    if (Object.keys(cardObject).length) {
      headerTemplate.stats = Object.keys(cardObject).map(key => {
        return {text: cardObject[key], subText: key};
      }
    );
    }
    return {...headerTemplate};
  }

  transformDataForCards(questionsArray) {
    const cardsTemplate = {
      cards: [],
    };
    cardsTemplate.cards = questionsArray.map(questionObj => {
      const newQuestionTemplate = {
        question: '',
        chart: [],
        blocks: [],
      };
      if (questionObj.hasOwnProperty('label')) {
        newQuestionTemplate.question = questionObj.label ? questionObj.label : '';
      }
      if (questionObj.hasOwnProperty('topics') && Array.isArray(questionObj.topics)) {
        questionObj.topics.forEach(topicObj => {
          // create chart object
          const chartObj = {
            label: topicObj['title'],
            value: topicObj['feedback_percentage'],
          };
          newQuestionTemplate.chart.push(chartObj);
          // create card object
          const cardObj = {
            title_text: topicObj['title'],
            body_text: topicObj['text'],
            view_more_link: '',
            percentage: {
              accuracy: topicObj['accuracy_percentage'],
              placeholder: `Overall accuracy of this section is ${topicObj['accuracy_percentage']}`,
            }
          };
          newQuestionTemplate.blocks.push(cardObj);
        });
      }
      return {...newQuestionTemplate};
    });
    return {...cardsTemplate};
  }

  transformCardResponseObject(responseData) {
    const template = {
      stats: [],
      cards: [],
    };
    if (responseData && responseData.hasOwnProperty('stats')) {
      template.stats = [...this.transformDataForStats(responseData.stats).stats];
    }
    if (responseData && responseData.hasOwnProperty('questions')) {
      const transformedData = this.transformDataForCards(responseData.questions);
      template.cards = [...transformedData.cards];
    }
    console.log('transformed data as ', template);
    return template;
  }
}
