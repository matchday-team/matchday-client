import { SharedTypeSafeWebSocket } from './SharedTypeSafeWebSocket';
import {
  requestMapperDefinition,
  responseMapperDefinition,
} from './WebSocketMappers';

let instance: SharedTypeSafeWebSocket<
  typeof requestMapperDefinition,
  typeof responseMapperDefinition
> | null = null;

export const getWebSocketApi = () => {
  if (!instance) {
    instance = new SharedTypeSafeWebSocket(
      requestMapperDefinition,
      responseMapperDefinition,
    );
  }
  return instance;
};
