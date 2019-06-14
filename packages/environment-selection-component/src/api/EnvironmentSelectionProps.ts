import { Environment, OnEnvironmentSelected, OnEnvironmentConnectionChange } from '.';

/**
 * The props that are passed to the EnvironmentSelection component
 */
export interface EnvironmentSelectionProps {
  /**
   * An array of environments, that should appear in the list
   */
  environments: Environment[];
  /**
   * Callback function, that will be called each time when an selection of a new environment happens
   */
  onEnvironmentSelected: OnEnvironmentSelected;
  /**
   * Callback function, that will be called each time when a connection to an environment happens or disconnection
   * from an environment happens
   */
  onEnvironmentConnectionChange: OnEnvironmentConnectionChange;
  /**
   * Currently selected environment. By default no environment is selected.
   * @default ""
   */
  selectedEnvironment?: Environment;
  /**
   * Currently connected environment. By default no environment is connected.
   * @default ""
   */
  connectedEnvironment?: Environment;
}
