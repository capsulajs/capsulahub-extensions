import { DisconnectRequest, ConnectRequest, FilterRequest, SelectRequest } from '.';

export interface EnvironmentSelection {
  connect(connectRequest: ConnectRequest): Promise<void>;
  disconnect(disconnectRequest: DisconnectRequest): Promise<void>;
  filter(filterRequest: FilterRequest): Promise<void>;
  select(selectRequest: SelectRequest): Promise<void>;
}
