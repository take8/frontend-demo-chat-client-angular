import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Channel } from '../shared/models/channel';
import { AppConst } from '../app-const';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  constructor(private http: HttpClient) { }

  fetch(): Observable<Channel[]> {
    return this.http.get<Channel[]>(`${AppConst.API_ENDPOINT}/channels`);
  }
}
