import { Environment } from '.';

/**
 * Callback function, that will be called each time when a disconnection from a currently connected environment is triggered
 */
export type OnDisconnect = (environmentToDisconnectFrom: Environment) => void;
