import { Environment } from '.';

/**
 * The request for a disconnection from a specific environment
 */
export interface DisconnectRequest {
  /**
   * The environment that has to be disconnected from
   */
  environment: Environment;
}
