import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Participation, ParticipationStatuses, Status} from "../../models/participation";

@Injectable()
export class ParticipationService {

  constructor(private apiService: ApiService) {}

  private participationSubject = new BehaviorSubject<Participation | null>(null);
  public participation$ = this.participationSubject.asObservable();

  private statusSubject = new BehaviorSubject<ParticipationStatuses | null>(null);
  public status$ = this.statusSubject.asObservable();

  public fetchParticipation(eventId: number, userId: number): void {
    this.apiService
      .getParticipation(eventId, userId)
      .subscribe((participation) =>
        this.participationSubject.next(participation)
      );
  }

  public fetchParticipationStatuses(eventId: number): void {
    this.apiService
      .getParticipationStatuses(eventId)
      .subscribe((participationStatuses) => this.statusSubject.next(participationStatuses));
  }



}
