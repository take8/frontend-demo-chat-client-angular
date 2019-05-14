import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../shared/models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  // TODO: service で共通化したい
  private BASE_URL = "https://us-central1-frontend-demo-chat.cloudfunctions.net/v1";

  constructor(private http: HttpClient) { }

  fetch(): Observable<Channel[]> {
    return this.http.get<Channel[]>(`${this.BASE_URL}/channels`);
  }
}
