import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CookieService} from '../cookie.service';
import {Cookie} from '../cookie-model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-cookie',
  templateUrl: './add-cookie.component.html',
  styleUrls: ['./add-cookie.component.css']
})
export class AddCookieComponent implements OnInit {
  cookieSize: number;
  cookieShape: string;
  cookieType: string;
  @Output() cookieAdded = new EventEmitter<Cookie>();

  onCookieCreated(size: string, type: string, shape: string) {
    const cookie = new Cookie(+size, shape, type, 0);

    this.cookieService.createCookie(cookie)
      .subscribe((response) => {
        this.cookieAdded.emit(cookie);
    });
  }

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

}
