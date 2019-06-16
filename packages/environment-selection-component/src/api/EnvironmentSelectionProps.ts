import { Environment, OnSelect, OnConnect, OnDisconnect } from '.';

/**
 * The props that are passed to the EnvironmentSelection component
 */
export interface EnvironmentSelectionProps {
  /**
   * An array of environments, that should appear in the list
   */
  environments: Environment[];
  /**
   * Callback function, that will be called each time when a selection of a new environment is triggered
   */
  onSelect: OnSelect;
  /**
   * Callback function, that will be called each time when a connection to a new environment is triggered
   */
  onConnect: OnConnect;
  /**
   * Callback function, that will be called each time when a disconnection from a currently connected environment is triggered
   */
  onDisconnect: OnDisconnect;
  /**
   * Currently selected environment. By default no environment is selected.
   * @default ""
   */
  selected?: Environment;
  /**
   * Currently connected environment. By default no environment is connected.
   * @default ""
   */
  connected?: Environment;
}
