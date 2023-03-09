import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Participation } from '../../models/participation';
import { SignUpEvent } from 'src/models/sign-up-event';
import { User } from 'src/models/user';

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
}


