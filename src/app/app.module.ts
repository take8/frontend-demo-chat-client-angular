import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';

import { MessageService } from './services/message.service';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    MessageFeedComponent,
    ReversePipe,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
