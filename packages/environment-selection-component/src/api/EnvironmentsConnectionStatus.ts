import { Environment } from '.';

export interface EnvironmentsConnectionStatusConnected {
  connected: Environment;
}

export interface EnvironmentsConnectionStatusDisconnected {
  disconnected: Environment;
}

export interface EnvironmentsConnectionStatusConnectedAndDisconnected
  extends EnvironmentsConnectionStatusConnected,
    EnvironmentsConnectionStatusDisconnected {}

export type EnvironmentsConnectionStatus =
  | EnvironmentsConnectionStatusConnected
  | EnvironmentsConnectionStatusDisconnected
  | EnvironmentsConnectionStatusConnectedAndDisconnected;
