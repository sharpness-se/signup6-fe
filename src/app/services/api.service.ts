import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  Participation,
  ParticipationStatuses,
} from '../../models/participation';
import { SignUpEvent } from 'src/models/sign-up-event';
import { User } from 'src/models/user';
import { Group } from '../../models/group';
import { Logentry } from '../../models/logentry';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getParticipation(
    eventId: number,
    userId: number
  ): Observable<Participation> {
    const params: HttpParams = new HttpParams()
      .set('eventId', eventId)
      .set('userId', userId);
    return this.httpClient.get<Participation>(
      environment.apiUrl + '/api/participations',
      { params }
    );
  }

  public getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(
      environment.apiUrl + '/api/users/' + userId
    );
  }

  public getEvent(eventId: number): Observable<SignUpEvent> {
    return this.httpClient.get<SignUpEvent>(
      environment.apiUrl + '/api/events/' + eventId
    );
  }

  public getUpcomingEventsByUser(userId: number): Observable<SignUpEvent[]> {
    return this.httpClient.get<SignUpEvent[]>(
      environment.apiUrl + '/api/events/findUpcomingEventsByUser/' + userId
    );
  }

  public getUpcomingEventsByGroup(groupId: number): Observable<SignUpEvent[]> {
    return this.httpClient.get<SignUpEvent[]>(
      environment.apiUrl +
        '/api/events/findAllUpcomingEventsByGroupId/' +
        groupId
    );
  }

  public getAllEvents(groupId: number): Observable<SignUpEvent[]> {
    return this.httpClient.get<SignUpEvent[]>(
      environment.apiUrl + '/api/events/findAllEventsByGroupId/' + groupId
    );
  }

  public postParticipation(payload: Participation): Observable<string> {
    return this.httpClient.post<string>(
      environment.apiUrl + '/api/participations',
      payload
    );
  }

  public getAllGroups(): Observable<Group[]> {
    return this.httpClient
      .get<Group[]>(environment.apiUrl + '/api/groups/all')
      .pipe(
        map((groups: Group[]) =>
          groups.sort((a, b) => a.name.localeCompare(b.name))
        )
      );
  }

  public getGroup(groupId: number): Observable<Group> {
    return this.httpClient.get<Group>(
      environment.apiUrl + '/api/groups/' + groupId
    );
  }

  public getUserByGroup(groupId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(
      environment.apiUrl + '/api/groups/findUsersByGroup/' + groupId
    );
  }

  public getLogentries(eventId: number): Observable<Logentry[]> {
    return this.httpClient.get<Logentry[]>(
      environment.apiUrl + '/api/logentry/findEntriesByEventId/' + eventId
    );
  }

  public getParticipationStatuses(
    eventId: number
  ): Observable<ParticipationStatuses> {
    return this.httpClient.get<ParticipationStatuses>(
      environment.apiUrl +
        '/api/participations/findParticipationByEvent/' +
        eventId
    );
  }
}
