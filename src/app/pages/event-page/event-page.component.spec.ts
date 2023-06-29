import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageComponent } from './event-page.component';
import {ActivatedRoute} from "@angular/router";

xdescribe('EventPageComponent', () => {
  let component: EventPageComponent;
  let fixture: ComponentFixture<EventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPageComponent ],
      providers: [ActivatedRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
