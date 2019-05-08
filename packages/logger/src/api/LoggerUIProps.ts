import { Observable } from 'rxjs';
import { LogEvent } from './index';

export default interface LoggerProps {
  logs$: Observable<LogEvent>;
}
