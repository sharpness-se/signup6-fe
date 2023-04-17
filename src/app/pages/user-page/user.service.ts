import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {User} from "../../../models/user";

@Injectable()
export class UserService {

  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public fetchUser(eventId: number): void {
    this.apiService
      .getUser(eventId)
      .subscribe((user) => this.userSubject.next(user));
  }
}
