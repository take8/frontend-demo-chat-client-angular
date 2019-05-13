import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  // @Input: 親コンポーネントから子への単方向データバインディング
  @Input() channelName: string;
  public message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.message) {
      // subscribe() で Observable から値を取得する
      this.messageService.post(this.channelName, this.message).subscribe(
        _ => this.message = '',
        error => console.log(error)
      );
    }
  }

}
