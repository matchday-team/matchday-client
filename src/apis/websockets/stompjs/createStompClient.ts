import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import { WEBSOCKET_CONFIG } from './constants';

export const createStompClient = (): Client => {
  const client = new Client({
    webSocketFactory: () => new SockJS(import.meta.env.VITE_SOCKJS_BASE_URL),
    debug: console.log.bind(console),
    reconnectDelay: WEBSOCKET_CONFIG.RECONNECT_DELAY,
    logRawCommunication: true,
    heartbeatIncoming: WEBSOCKET_CONFIG.HEARTBEAT_INCOMING,
    heartbeatOutgoing: WEBSOCKET_CONFIG.HEARTBEAT_OUTGOING,
  });

  client.onUnhandledFrame = frame => {
    console.error('[onUnhandledFrame] ', frame);
  };

  client.onUnhandledMessage = message => {
    console.error('[onUnhandledMessage] ', message);
  };

  client.onUnhandledReceipt = receipt => {
    console.error('[onUnhandledReceipt] ', receipt);
  };

  client.onWebSocketError = error => {
    console.error('[onWebSocketError] ', error);
  };

  client.onStompError = async frame => {
    console.error('STOMP error:', frame.headers.message);
  };

  return client;
};
