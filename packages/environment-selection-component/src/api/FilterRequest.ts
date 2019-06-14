/**
 * The request for a filter that will be used for filtering environments list
 */
export interface FilterRequest {
  /**
   * If environmentName includes the provided searchQuery, the environment will be included in the filtered list
   * If searchQuery === "" filtering will be canceled and all the environments will be included in the list
   */
  searchQuery: string;
}
