import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {User} from "../../../models/user";
import {SignUpEvent} from "../../../models/sign-up-event";

@Injectable()
export class UserService {

  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  private eventSubject = new BehaviorSubject<SignUpEvent[]> ([]);
  public events$ = this.eventSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public fetchUser(userId: number): void {
    this.apiService
      .getUser(userId)
      .subscribe((user) => this.userSubject.next(user));
  }

  public fetchUpcomingEventsByUser(userId: number): void {
    this.apiService
      .getUpcomingEvents(userId)
      .subscribe((events) => this.eventSubject.next(events));
  }

}
