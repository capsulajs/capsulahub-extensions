import { Environment } from '.';

/**
 * The request for a connection to a specific environment
 */
export interface ConnectRequest {
  /**
   * The environment that has to be connected to
   */
  environment: Environment;
}
