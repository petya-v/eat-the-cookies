import { Component, OnInit } from '@angular/core';
import {CookieService} from '../cookie.service';

@Component({
  selector: 'app-cookie-list',
  templateUrl: './cookie-list.component.html',
  styleUrls: ['./cookie-list.component.css']
})
export class CookieListComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }
  getCookies() {
    this.cookieService.getCookies();
  }

}
