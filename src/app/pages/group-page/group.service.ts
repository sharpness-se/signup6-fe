import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Group} from "../../../models/group";
import {ApiService} from "../../services/api.service";

@Injectable()
export class GroupService {

  private groupSubject: BehaviorSubject<Group | null> =
    new BehaviorSubject<Group | null>(null);
  public group$: Observable<Group | null> =
    this.groupSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public fetchGroup(groupId: number): void {
    this.apiService
      .getGroup(groupId)
      .subscribe((group) => this.groupSubject.next(group));
  }
}
