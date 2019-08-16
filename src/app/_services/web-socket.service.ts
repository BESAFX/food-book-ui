import {Injectable} from '@angular/core';
import * as SockJS from 'sockjs-client';
import {Stomp} from 'stompjs/lib/stomp.js';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  stompClient: any = {};

  constructor() {
  }

  connect() {

    // Create and init the SockJS object
    let socket = new SockJS('http://localhost:8080/socket');
    this.stompClient = Stomp.over(socket);
    let that = this;

    setTimeout(() => {
      // Subscribe the '/notify' channell
      this.stompClient.connect({}, function (frame) {
        that.stompClient.subscribe('/user/queue/notify', function (notification) {
          // Call the notify function when receive a notification
          console.info(JSON.parse(notification.body).content);
        });
      });

    }, 500);

  }

}
