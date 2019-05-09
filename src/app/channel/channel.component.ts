import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * チャネル詳細コンポーネント
 */
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  public name: string;

  // DIが働いている
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params が Observable を返す(RxJS の interface)
    this.route.params.subscribe(res => {
      this.name = res['channelName'];
    });
  }

}
