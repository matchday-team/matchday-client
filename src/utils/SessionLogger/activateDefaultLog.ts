import { SessionLogger } from './SessionLogger';

export const activateDefaultLog = () => {
  SessionLogger.enableLogLevels([
    'info',
    'warn',
    'error',
    'uncaughtError',
    'debug',
  ]);
  SessionLogger.enableFeatures([
    'websocket',
    'websocket-infra',
    'browserInfo',
    'nav',
    'commonError',
  ]);
};
