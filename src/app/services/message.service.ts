import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Message } from '../shared/models/message';

// @Injectable でサービスとして認識される
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private BASE_URL = "https://us-central1-frontend-demo-chat.cloudfunctions.net/v1";

  constructor(private http: HttpClient) { }

  fetch(channelName: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.BASE_URL}/channels/${channelName}/messages`);
  }
}
