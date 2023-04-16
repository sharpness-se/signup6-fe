import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {SignUpEvent} from "../../../models/sign-up-event";

@Injectable()
export class EventListService {
  private eventsSubject: BehaviorSubject<SignUpEvent[] | null> =
    new BehaviorSubject<SignUpEvent[] | null>(null);
  public events$: Observable<SignUpEvent[] | null> =
    this.eventsSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public fetchUpcomingEvents(groupId: number): void {
    this.apiService
      .getUpcomingEvents(groupId)
      .subscribe((groups) => this.eventsSubject.next(groups));
  }

  public fetchAllEvents(groupId: number): void {
    this.apiService
      .getAllEvents(groupId)
      .subscribe((groups) => this.eventsSubject.next(groups));
  }
}
