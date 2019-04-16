export type Type = 'request' | 'response';
export interface Event {
  timestamp: number;
  correlationId: string;
  type: Type;
  serviceName: string;
  methodName: string;
  data: any;
}
