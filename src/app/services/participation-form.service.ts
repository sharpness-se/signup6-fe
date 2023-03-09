import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUpEvent } from 'src/models/sign-up-event';
import { User } from 'src/models/user';
import { Participation } from '../../models/participation';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ParticipationFormService {
  private participationSubject: BehaviorSubject<Participation | null> =
    new BehaviorSubject<Participation | null>(null);
  public participation$: Observable<Participation | null> =
    this.participationSubject.asObservable();

  private signUpEventSubject: BehaviorSubject<SignUpEvent | null> =
    new BehaviorSubject<SignUpEvent | null>(null);
  public signUpEvent$: Observable<SignUpEvent | null> =
    this.signUpEventSubject.asObservable();

  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> =
    this.userSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public fetchParticipation(eventId: number, userId: number): void {
    this.apiService
      .getParticipation(eventId, userId)
      .subscribe((participation) =>
        this.participationSubject.next(participation)
      );
  }
  public fetchSignUpEvent(eventId: number): void {
    this.apiService
      .getEvent(eventId)
      .subscribe((event) => this.signUpEventSubject.next(event));
  }
  public fetchUser(eventId: number): void {
    this.apiService
      .getUser(eventId)
      .subscribe((user) => this.userSubject.next(user));
  }
}
