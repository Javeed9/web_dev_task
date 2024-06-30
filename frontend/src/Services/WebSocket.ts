// src/Services/socketService.ts
import io, { Socket } from 'socket.io-client';
import { IMessage, IUser } from '../Contexts';

class SocketService {
  socket: Socket | undefined;

  connect(userData: IUser, setMessages: (messages: IMessage[]) => void) {
    if (!this.socket) {
      this.socket = io("http://localhost:5000");
      this.socket.on('connect', () => {
        console.log('Connected to WebSocket server!');
        this.setupListeners(setMessages); // Set up event listeners after connecting
      });
      this.socket.emit('setup', userData);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  sendMessage(message: any) {
    console.log(message)
    this.socket?.emit('newMessage', message);
  }

  joinChat(chatId: string) {
    this.socket?.emit('join chat', chatId);
  }

  setupListeners(setMessages: (messages: IMessage[]) => void) {
    this.socket?.on('messageReceived', (newMessage: IMessage) => {
      console.log(newMessage);
      setMessages(prev => [...prev, newMessage]);
    });
  }
}

export const socketService = new SocketService();
