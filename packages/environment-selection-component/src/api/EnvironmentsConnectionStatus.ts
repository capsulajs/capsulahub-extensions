import { Environment } from '.';

/**
 * The information about the connection statuses change in environments
 */
export interface EnvironmentsConnectionStatus {
  /**
   * The name of the environment
   */
  environment: Environment;
  /**
   * The new status of connection for this environment
   */
  status: 'connected' | 'disconnected';
}
