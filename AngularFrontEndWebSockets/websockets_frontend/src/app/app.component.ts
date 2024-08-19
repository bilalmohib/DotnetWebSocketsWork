import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websockets_frontend';

  messages: { client: string, text: string, color: string }[] = [];
  ws: WebSocket = new WebSocket("ws://localhost:8181");

  clientName = new FormControl('');
  messageContent = new FormControl('');

  clientColors: { [key: string]: string } = {};

  constructor() {
    this.ws.onmessage = (message) => {
      const receivedMessage = JSON.parse(message.data);

      if (!this.clientColors[receivedMessage.client]) {
        this.clientColors[receivedMessage.client] = this.getRandomColor();
      }

      this.messages.push({
        client: receivedMessage.client,
        text: receivedMessage.text,
        color: this.clientColors[receivedMessage.client]
      });
    }
  }

  sendMessage() {
    const name = this.clientName.value;
    const content = this.messageContent.value;

    if (name && content) {
      const message = { client: name, text: content };
      this.ws.send(JSON.stringify(message));
      this.messageContent.reset();
    }
  }

  getRandomColor() {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
