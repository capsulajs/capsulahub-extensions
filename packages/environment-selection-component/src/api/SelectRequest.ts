import { Environment } from '.';

/**
 * The request for the selection of an environment.
 */
export interface SelectRequest {
  /**
   * The name of an environment, that has to be selected.
   */
  environment: Environment;
}
