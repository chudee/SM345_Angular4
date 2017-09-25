import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AdminMentoringSetting } from '../../interfaces/admin-mentoring-setting';

@Injectable()
export class AdminMentoringService {
  private mentoringUrl = 'api/mentoringSetting';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }


  getSetting(): Promise<AdminMentoringSetting> {
    return this.http.get(this.mentoringUrl)
        .toPromise()
        .then(response => response.json().data as AdminMentoringSetting)
        .catch(this.handleError);
  }

  update(adminMentoringSetting: AdminMentoringSetting): Promise<AdminMentoringSetting> {
    const url = `${this.mentoringUrl}/0`;
    return this.http
        .put(url, JSON.stringify(adminMentoringSetting), {headers: this.headers})
        .toPromise()
        .then(() => adminMentoringSetting)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
