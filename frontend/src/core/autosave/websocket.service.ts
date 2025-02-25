// import { io, Socket } from 'socket.io-client';
// import { AutosaveCanvasSchema } from './autosave.types';

// export class WebSocketService {
//   private socket: Socket | null = null;
//   private userId: string;

//   constructor(userId: string) {
//     this.userId = userId;
//   }

//   connect(): void {
//     const SOCKET_URL =
//       process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001';
//     this.socket = io(SOCKET_URL, {
//       query: { userId: this.userId },
//     });

//     this.socket.on('connect', () => {
//       console.log('Connected to WebSocket server');
//     });

//     this.socket.on('disconnect', () => {
//       console.log('Disconnected from WebSocket server');
//     });

//     this.socket.on('error', (error: any) => {
//       console.error('WebSocket error:', error);
//     });
//   }

//   disconnect(): void {
//     if (this.socket) {
//       this.socket.disconnect();
//       this.socket = null;
//     }
//   }

//   subscribeToUpdates(callback: (data: AutosaveCanvasSchema) => void): void {
//     if (!this.socket) {
//       this.connect();
//     }

//     this.socket?.on('schema-update', (data: AutosaveCanvasSchema) => {
//       callback(data);
//     });
//   }

//   sendUpdate(schemaData: AutosaveCanvasSchema): void {
//     if (!this.socket) {
//       this.connect();
//     }

//     this.socket?.emit('schema-update', schemaData);
//   }
// }
