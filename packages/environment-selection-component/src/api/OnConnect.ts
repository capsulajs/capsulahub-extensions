import { Environment } from '.';

/**
 * Callback function, that will be called each time when a connection to a new environment is triggered
 */
export type OnConnect = (environmentToConnectTo: Environment) => void;
