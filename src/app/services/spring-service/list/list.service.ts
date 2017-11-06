import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Notice } from '../../../interfaces/notice';
import { Mentoring } from '../../../interfaces/mentoring';
import { Question } from '../../../interfaces/question';
import { Manual } from '../../../interfaces/manual';

@Injectable()
export class ListService {
  private serverUrl = 'http://220.230.112.31:8081/sm345/';
  private noticesUrl = 'api/notices';
  private mentoringsUrl = 'api/mentorings';
  private questionsUrl = 'api/questions';
  private manualsUrl = this.serverUrl + 'api/list/1';

  constructor(private http: Http) { }

  getManuals(): Promise<Manual[]> {
    return this.http.get(this.manualsUrl)
      .toPromise()
      .then(response => response.json().data as Manual[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
