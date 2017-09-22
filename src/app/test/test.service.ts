import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Notice } from '../navigate/notice/notice';
import { Mentoring } from '../navigate/mentorings/mentoring';
import { Question } from '../navigate/questions/question';
import { Manual } from '../navigate/manual/manual';
import { User } from '../navigate/user/user';

@Injectable()
export class TestService {
  private noticesUrl = 'api/notices';
  private mentoringsUrl = 'api/mentorings';
  private questionsUrl = 'api/questions';
  private manualsUrl = 'api/manual';
  private usersUrl = 'api/users';

  constructor(private http: Http) { }

  getNotices(): Promise<Notice[]> {
    return this.http.get(this.noticesUrl)
      .toPromise()
      .then(response => response.json().data as Notice[])
      .catch(this.handleError);
  }

  getNotice(id: number): Promise<Notice> {
    const url = `${this.noticesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Notice)
      .catch(this.handleError);
  }

  getMentorings(): Promise<Mentoring[]> {
    return this.http.get(this.mentoringsUrl)
      .toPromise()
      .then(response => response.json().data as Mentoring[])
      .catch(this.handleError);
  }

  getMentoring(id: number): Promise<Mentoring> {
    const url = `${this.mentoringsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Mentoring)
      .catch(this.handleError);
  }

  getQuestions(): Promise<Question[]> {
    return this.http.get(this.questionsUrl)
      .toPromise()
      .then(response => response.json().data as Question[])
      .catch(this.handleError);
  }

  getQuestion(id: number): Promise<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Question)
      .catch(this.handleError);
  }

  getManuals(): Promise<Manual[]> {
    return this.http.get(this.manualsUrl)
      .toPromise()
      .then(response => response.json().data as Manual[])
      .catch(this.handleError);
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
