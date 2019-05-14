import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { Message } from '../shared/models/message';
import { AppConst } from '../app-const';

// @Injectable でサービスとして認識される
@Injectable({
  providedIn: 'root'
})
export class MessageService {
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
    return this.http.get<Message[]>(`${AppConst.API_ENDPOINT}/channels/${channelName}/messages`);
  }

  post(channelName: string, body: string) {
    return this.http.post<Message>(`${AppConst.API_ENDPOINT}/channels/${channelName}/messages`, { 'body': body }, this.httpOptions);
  }

  notify() {
    // subscribe() しているコンポーネント側にデータ通知を発行
    this.subject.next();
  }
}
