import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CookieService} from '../../cookie.service';
import {Cookie} from "../../cookie-model";

@Component({
  selector: 'app-cookie-item',
  templateUrl: './cookie-item.component.html',
  styleUrls: ['./cookie-item.component.css']
})
export class CookieItemComponent implements OnInit {
  @Input() cookie: Cookie;
  @Output() cookieRemoved = new EventEmitter<number>();

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }
  onCookieRemove() {
    this.cookieService.removeCookie(this.cookie.id).subscribe(
      response => {
        this.cookieRemoved.emit(this.cookie.id);
      });
  }

}
