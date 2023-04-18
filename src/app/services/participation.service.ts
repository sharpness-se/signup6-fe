import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Participation} from "../../models/participation";

@Injectable()
export class ParticipationService {

  constructor(private apiService: ApiService) {}

  private participationSubject = new BehaviorSubject<Participation | null>(null);
  public participation$ = this.participationSubject.asObservable();

  public fetchParticipation(eventId: number, userId: number): void {
    this.apiService
      .getParticipation(eventId, userId)
      .subscribe((participation) =>
        this.participationSubject.next(participation)
      );
  }

}
