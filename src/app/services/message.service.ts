import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { Message } from '../shared/models/message';

// @Injectable でサービスとして認識される
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private BASE_URL = "https://us-central1-frontend-demo-chat.cloudfunctions.net/v1";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private subject = new Subject();

  // getter
  get waiting() {
    return this.subject.asObservable();
  }

  constructor(private http: HttpClient) { }

  fetch(channelName: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.BASE_URL}/channels/${channelName}/messages`);
  }

  post(channelName: string, body: string) {
    return this.http.post<Message>(`${this.BASE_URL}/channels/${channelName}/messages`, { 'body': body }, this.httpOptions);
  }

  notify() {
    // subscribe() しているコンポーネント側にデータ通知を発行
    this.subject.next();
  }
}
