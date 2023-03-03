import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Participation, Status} from "../../models/participation";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ParticipationFormService {
  private participationSubject: BehaviorSubject<Participation> = new BehaviorSubject<Participation>({
    comment: '',
    eventId: 0,
    id: 0,
    numberOfParticipants: 0,
    signUpTime: '',
    status: Status.Unregistered,
    userId: 0
  });
  public participation$: Observable<Participation> = this.participationSubject.asObservable();
  constructor(private apiService: ApiService) { }

  public fetchParticipation(eventId: number, userId: number): void {
    this.apiService.getParticipation(eventId, userId).subscribe(participation => this.participationSubject.next(participation));
  }

}
