import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CookieService} from '../cookie.service';
import {Cookie} from '../cookie-model';

@Component({
  selector: 'app-cookie-list',
  templateUrl: './cookie-list.component.html',
  styleUrls: ['./cookie-list.component.css']
})
export class CookieListComponent implements OnInit, OnChanges {

  ngOnInit() {
    this.getCookiesFromDB();
  }

  ngOnChanges(){
    debugger;
    this.getCookiesFromDB();
  }


  cookies: Array<Cookie> = [];
  @Input() newCookie: Cookie;

  constructor(private cookieService: CookieService) { }


  getCookiesFromDB() {
    this.cookieService.getCookies()
      .subscribe(response => {
        const cookies: Array<Cookie> = [];
        const res = response.json();
        for(let cookie of res){
          cookies.push(new Cookie(cookie.size, cookie.shape, cookie.type, cookie.id));
        }
        this.cookies = [...cookies];
      });
  }

  removeCookie(){
    this.getCookiesFromDB();
  }

}
