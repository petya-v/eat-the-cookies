import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CookieService} from '../../cookie.service';

@Component({
  selector: 'app-cookie-item',
  templateUrl: './cookie-item.component.html',
  styleUrls: ['./cookie-item.component.css']
})
export class CookieItemComponent implements OnInit {
  id: number;
  size: number;
  shape: string;
  type: string;
  @Input() cookie;
  @Output() cookieRemoved = new EventEmitter();

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }
  onCookieRemove() {
    this.cookieService.removeCookie(1);
  }

}
