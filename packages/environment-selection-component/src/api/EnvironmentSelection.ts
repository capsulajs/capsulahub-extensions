import { DisconnectRequest, ConnectRequest, SelectRequest } from '.';

/**
 * WebComponent, that is responsible for rendering the list of available environments.
 * The connection and selection status is shown for each environment.
 * It is possible to change the connection status of each environment and to select different environments.
 */
export interface EnvironmentSelection extends HTMLElement {
  /**
   * Establish the connection to a specific environment. Only one connection can be established in a time, so if any
   * environment has an opened connection, it will be closed before establishing a new connection.
   * Promise is resolved when the connection is established.
   * Promise can be rejected is such cases:
   * - connectRequest is invalid;
   * - a requested environment does not exist in the list
   * - a requested environment has been already connected to
   * - a server error appears while trying to disconnect from a previously connected environment
   * - a server error appears while trying to connect to a provided environment
   */
  connect(connectRequest: ConnectRequest): Promise<void>;
  /**
   * Disconnect from a specific environment.
   * Promise is resolved when the connection is stopped.
   * Promise can be rejected is such cases:
   * - disconnectRequest is invalid;
   * - a requested environment does not exist in the list
   * - the provided environment is not connected
   * - a server error appears while trying to disconnect from the provided environment
   */
  disconnect(disconnectRequest: DisconnectRequest): Promise<void>;
  /**
   * Select a specific environment. Only one environment can be selected, so if any environment was selected
   * previously - it becomes unselected.
   * Promise is resolved, when a new environment is selected.
   * Promise can be rejected is such cases:
   * - selectRequest is invalid;
   * - the provided environment has been already selected;
   */
  select(selectRequest: SelectRequest): Promise<void>;
}
