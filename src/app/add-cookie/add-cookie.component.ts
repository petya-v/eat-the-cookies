import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CookieService} from '../cookie.service';
import {Cookie} from '../cookie1';
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
  cookieObs: Observable<Response>;
  @Output() cookieAdded = new EventEmitter();

  onCookieCreated() {
    const cookie = new Cookie(10, 'heart', 'blueberry');

    this.cookieService.createCookie(cookie)
      .subscribe((response) => {
        this.cookieAdded.emit(cookie);
    });
  }

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

}
