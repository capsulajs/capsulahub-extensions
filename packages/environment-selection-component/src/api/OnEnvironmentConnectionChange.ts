import { EnvironmentsConnectionStatus } from '.';

/**
 * The callback that is called each time a new connection is established to an environment or an environment is
 * disconnected (only one environment can be connected in a time, so before the establishing of a new connection the
 * disconnection from a currently connected environment will happen)
 */
export type OnEnvironmentConnectionChange = (environmentsConnectionStatus: EnvironmentsConnectionStatus) => void;
