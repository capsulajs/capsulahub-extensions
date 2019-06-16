import { Environment } from '.';

/**
 * Callback function, that will be called each time when a selection of a new environment is triggered
 */
export type OnSelect = (selectedEnvironment: Environment) => void;
