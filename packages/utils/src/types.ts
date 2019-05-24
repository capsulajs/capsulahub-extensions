export interface PrepareWebComponentRequest {
  name: string;
  path: string;
  componentModules: any;
}

export interface MountWebComponentRequest extends PrepareWebComponentRequest {
  querySelector: string;
}
