import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Login } from '../interfaces/login';

@Injectable()
export class LoginService {
  public token: string;
  private loginUrl = 'http://220.230.112.31:3000/api/auth/login';
  
  constructor(private http: Http) {
      // set token if saved in local storage
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
  }
  login(id: string, password: string): Observable<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.loginUrl, JSON.stringify({ id: id, password: password }), {headers: headers})
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            if (token) {
                // set token property
                this.token = token;

                // store id and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ id: id, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
