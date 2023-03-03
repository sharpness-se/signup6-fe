import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Participation} from "../../models/participation";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getParticipation(eventId: number, userId: number): Observable<Participation> {
    const params: HttpParams = new HttpParams().set('eventId', eventId).set('userId', userId)
    return this.httpClient.get<Participation>(environment.apiUrl + '/api/participations', {params});
  }

  public getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + '/api/users/' + userId);
  }

  public getEvent(eventId: number): Observable<SignUpEvent> {
    return this.httpClient.get<SignUpEvent>(environment.apiUrl + '/api/event/' + eventId);
  }
}

export interface User {
  /** Format: int64 */
  id: number;
  firstName: string;
  lastName: string;
  comment: string;
  email: string;
  phone: string;
  /** @enum {string} */
  permission: "Administrator" | "NormalUser";
  /** @enum {string} */
  imageProvider: "Gravatar" | "Cloudinary";
  imageVersion: string;
  providerKey: string;
}
interface SignUpEvent {
  /** Format: int64 */
  id?: number;
  group?: Group;
  name?: string;
  description?: string;
  /** Format: date-time */
  startTime?: string;
  /** Format: date-time */
  endTime?: string;
  /** Format: date */
  lastSignUpDate?: string;
  venue?: string;
  allowExtraFriends?: boolean;
  /** @enum {string} */
  eventStatus?: "Created" | "Cancelled";
  /** Format: int32 */
  maxParticipants?: number;
  cancellationReason?: string;
}

interface Group {
    /** Format: int64 */
    id?: number;
    name?: string;
    description?: string;
    mailFrom?: string;
    mailSubjectPrefix?: string;
}
