import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Cookie} from './cookie-model';

@Injectable()
export class CookieService {

  constructor(private http: Http) { }

  getCookies() {
    return this.http.get(' http://localhost:3000/cookies');
  }

  createCookie(cookie: Cookie) {
    return this.http.post('http://localhost:3000/cookies', cookie);
  }

  removeCookie(id: number) {
    return this.http.delete(' http://localhost:3000/cookies/' + id);
  }

}
