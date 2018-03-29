import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCookieComponent } from './add-cookie.component';

describe('AddCookieComponent', () => {
  let component: AddCookieComponent;
  let fixture: ComponentFixture<AddCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
