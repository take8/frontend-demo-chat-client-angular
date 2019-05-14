import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ChannelService } from './services/channel.service';
import { Channel } from './shared/models/channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-demo-chat-client-angular';

  public channelsObservable: Observable<Channel[]>

  constructor(private channelService: ChannelService) { }

  ngOnInit() {
    this.channelsObservable = this.channelService.fetch();
  }
}
