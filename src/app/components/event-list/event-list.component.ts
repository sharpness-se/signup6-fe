import { Component, Input, OnInit } from '@angular/core';
import { EventListService } from './event-list.service';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [EventListService],
})
export class EventListComponent implements OnInit {
  @Input() groupId!: number;
  @Input() fetchAll: boolean = false;

  constructor(public readonly eventListService: EventListService) {}

  public ngOnInit(): void {
    this.fetchEvents();
  }

  private fetchEvents(): void {
    if (this.fetchAll) {
      this.eventListService.fetchAllEvents(this.groupId);
    } else {
      this.eventListService.fetchUpcomingEvents(this.groupId);
    }
  }
  public sameDay(aIsoDate: string, bIsoDate: string): boolean {
    const a = DateTime.fromISO(aIsoDate);
    const b = DateTime.fromISO(bIsoDate);
    return a.hasSame(b, 'day');
  }
  public getTime(isoTime: string): string {
    return `${DateTime.fromISO(isoTime).toLocaleString({
      weekday: 'long',
    })} ${DateTime.fromISO(isoTime).toLocaleString()}`;
  }
  public getTimeRange(isoStartTime: string, isoEndTime: string): string {
    return `${DateTime.fromISO(isoStartTime).toLocaleString(DateTime.TIME_SIMPLE)} - ${DateTime.fromISO(isoEndTime).toLocaleString(DateTime.TIME_SIMPLE)}`
  }
}
