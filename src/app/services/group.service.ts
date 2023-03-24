import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Group} from "../../models/group";
import {ApiService} from "./api.service";

@Injectable()
export class GroupService {

  private groupsSubject: BehaviorSubject<Group[] | null> =
    new BehaviorSubject<Group[] | null>(null);
  public groups$: Observable<Group[] | null> =
    this.groupsSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public fetchAllGroups(): void {
    this.apiService
      .getAllGroups()
      .subscribe((groups) => this.groupsSubject.next(groups));
  }
}
