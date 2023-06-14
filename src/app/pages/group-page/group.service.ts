import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../../../models/group';
import { ApiService } from '../../services/api.service';
import { User } from '../../../models/user';

@Injectable()
export class GroupService {
  private groupSubject = new BehaviorSubject<Group | null>(null);
  public group$ = this.groupSubject.asObservable();
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  constructor(private apiService: ApiService) {}

  public fetchGroup(groupId: number): void {
    this.apiService
      .getGroup(groupId)
      .subscribe((group) => this.groupSubject.next(group));
  }

  public fetchUsers(groupId: number): void {
    this.apiService
      .getUserByGroup(groupId)
      .subscribe((users) => this.usersSubject.next(users));
  }
}
