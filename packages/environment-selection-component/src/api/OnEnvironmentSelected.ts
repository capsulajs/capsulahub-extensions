import { Environment } from '.';

/**
 * The callback that is called each time a new selection is made within environments
 */
export type OnEnvironmentSelected = (selectedEnvironment: Environment) => void;
