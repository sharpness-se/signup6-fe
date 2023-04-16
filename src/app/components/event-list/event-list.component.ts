import { Component, Input, OnInit } from '@angular/core';
import { EventListService } from './event-list.service';

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
}
