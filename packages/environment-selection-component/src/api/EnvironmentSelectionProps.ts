import { Environment, OnEnvironmentSelected, OnEnvironmentConnectionChange } from '.';

export interface EnvironmentSelectionProps {
  environments: Environment[];
  onEnvironmentSelected: OnEnvironmentSelected;
  onEnvironmentConnectionChange: OnEnvironmentConnectionChange;
  selectedEnvironment?: Environment;
  connectedEnvironment?: Environment;
  searchQuery?: string;
}
