import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";

import {Logentry} from "../../models/logentry";

@Injectable()
export class LogentryService {

  constructor(private apiService: ApiService) {}

  private logentrySubject = new BehaviorSubject<Logentry[] | null>(null);
  public logentry$ = this.logentrySubject.asObservable();

  public fetchLogentries(eventId: number): void {
    this.apiService
      .getLogentries(eventId)
      .subscribe((logentries) => this.logentrySubject.next(logentries));
  }
}
