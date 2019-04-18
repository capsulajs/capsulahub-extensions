export interface Event {
  timestamp: number;
  correlationId: string;
  type: "request" | "response";
  serviceName: string;
  methodName: string;
  data: any;
}
