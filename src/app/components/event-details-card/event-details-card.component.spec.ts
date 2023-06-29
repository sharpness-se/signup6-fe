import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsCardComponent } from './event-details-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Group} from "../../../models/group";
import {SignUpEvent} from "../../../models/sign-up-event";

describe('EventDetailsCardComponent', () => {
  let component: EventDetailsCardComponent;
  let fixture: ComponentFixture<EventDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailsCardComponent);
    component = fixture.componentInstance;
    component.signUpEvent = {...MOCK_SIGNUP_EVENT};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get eventTimeSpan', () => {
    it('should return valid time span', () => {
      const timeSpan = component.eventTimeSpan;
      expect(timeSpan).toBe("Wednesday 2028-05-03, 18:00 - 19:00")
    })
    it('should return dash for empty signUpEvent', () => {
      component.signUpEvent = null;
      const timeSpan = component.eventTimeSpan;
      expect(timeSpan).toBe("-")
    })
  })

  describe('timeSpan', () => {
    it('should return valid time span', () => {
      const timeSpan = component['timeSpan']('2028-05-03T18:00:00', '2028-05-03T19:00:00');
      expect(timeSpan).toBe("Wednesday 2028-05-03, 18:00 - 19:00")
    })
    it('should return valid time span when event spans day change', () => {
      const timeSpan = component['timeSpan']('2028-05-03T18:00:00', '2028-05-04T19:00:00');
      expect(timeSpan).toBe("Wednesday 2028-05-03, 18:00 - Thursday 2028-05-04, 19:00")
    })
  })
});

export const MOCK_GROUP: Group = {
  description: "För dej som vill lära dej mer",
  id: -1,
  name: "Crisp Rocket Days",
  mailFrom: 'from@test.com',
  mailSubjectPrefix: 'abc'
}

export const MOCK_SIGNUP_EVENT: SignUpEvent = {
  /** Format: int64 */
  id: 0,
  group: MOCK_GROUP,
  name: 'test name',
  description: 'test description',
  /** Format: date-time */
  startTime: '2028-05-03T18:00:00',
  /** Format: date-time */
  endTime: '2028-05-03T19:00:00',
  /** Format: date */
  lastSignUpDate: '2028-05-03T19:00:00',
  venue: 'test venue',
  allowExtraFriends: false,
  /** @enum {string} */
  eventStatus: 'Created',
  /** Format: int32 */
  maxParticipants: 10,
  cancellationReason: null
}
