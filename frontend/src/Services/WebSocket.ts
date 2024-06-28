// websocketService.js
import io from 'socket.io-client';

class WebSocketService {
  socket;
  constructor() {
    this.socket = io('http://localhost:8000'); // Update with your server URL
  }

  setup(userData) {
    this.socket.emit('setup', userData);
  }

  joinChat(room) {
    this.socket.emit('join chat', room);
  }

  sendMessage(newMessage) {
    this.socket.emit('newMessage', newMessage);
  }

  onMessageReceived(callback) {
    this.socket.on('messageReceived', callback);
  }

  onTyping(room) {
    this.socket.emit('typing', room);
  }

  onStopTyping(room) {
    this.socket.emit('stop typing', room);
  }

  onConnected(callback) {
    this.socket.on('connected', callback);
  }

}

const socketService = new WebSocketService();
export default socketService;
