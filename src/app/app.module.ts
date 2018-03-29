import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddCookieComponent } from './add-cookie/add-cookie.component';
import { CookieListComponent } from './cookie-list/cookie-list.component';
import { CookieItemComponent } from './cookie-list/cookie-item/cookie-item.component';
import {HttpModule} from '@angular/http';
import {CookieService} from './cookie.service';


@NgModule({
  declarations: [
    AppComponent,
    AddCookieComponent,
    CookieListComponent,
    CookieItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
