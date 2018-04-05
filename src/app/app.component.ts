import { Component } from '@angular/core';
import {Cookie} from "./cookie-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newCookie: Cookie;

  addNewCookie(newCookie: Cookie){
    this.newCookie = newCookie;
  }
}
