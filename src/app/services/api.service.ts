import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Participation } from '../../models/participation';
import { SignUpEvent } from 'src/models/sign-up-event';
import { User } from 'src/models/user';
import {Group} from "../../models/group";

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

  public getUpcomingEvents(groupId: number): Observable<SignUpEvent[]> {
    return this.httpClient.get<SignUpEvent[]>(
      environment.apiUrl + '/api/events/findUpcomingEventsByUser/' + groupId
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

  public getAllGroups(): Observable<Group[]>  {
    return this.httpClient.get<Group[]>(
      environment.apiUrl + '/api/groups/all'
    );
  }

  public getGroup(groupId: number): Observable<Group> {
    return this.httpClient.get<Group>(
      environment.apiUrl + '/api/groups/' + groupId
    );
  }
}
