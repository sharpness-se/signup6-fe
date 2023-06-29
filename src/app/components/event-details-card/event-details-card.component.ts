import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';
import { SignUpEvent } from 'src/models/sign-up-event';

@Component({
  selector: 'app-event-details-card',
  templateUrl: './event-details-card.component.html',
  styleUrls: ['./event-details-card.component.scss']
})
export class EventDetailsCardComponent {
  @Input() signUpEvent: SignUpEvent | null = null;

  public get eventTimeSpan(): string {
    if (!this.signUpEvent) {
      return '-';
    }
    return this.timeSpan(this.signUpEvent.startTime, this.signUpEvent.endTime);
  }


  public hasAlreadyOccured(): boolean {
    if (!this.signUpEvent) {
      return false;
    }

    return DateTime.fromISO(this.signUpEvent.endTime) < DateTime.now();
  }
  private timeSpan(startTimeISO: string, endTimeISO: string): string {
    const startTime = DateTime.fromISO(startTimeISO);
    const endTime = DateTime.fromISO(endTimeISO);
    const fullDate = 'cccc yyyy-LL-dd, T';
    if (startTime.hasSame(endTime, 'day')) {
      return `${startTime.toFormat(fullDate)} - ${endTime.toFormat('T')}`;
    } else {
      return `${startTime.toFormat(fullDate)} - ${endTime.toFormat(fullDate)}`;
    }
  }
}
