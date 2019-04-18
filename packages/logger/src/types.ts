import { Observable } from "rxjs";

export interface Event {
  timestamp: number;
  correlationId: string;
  type: "request" | "response";
  serviceName: string;
  methodName: string;
  data: any;
}

export interface LoggerProps {
  logs$: Observable<Event>;
}
